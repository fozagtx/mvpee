import { NextResponse, NextRequest } from "next/server";
import { compare, hash } from "bcrypt";
import { db } from "@/app/db/src";
import { users, accounts, sessions } from "@/app/db/src/schema";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";
import { serialize } from "cookie";

export async function POST(request: NextRequest) {
  try {
    const { email, password: providedPassword } = await request.json();

    // First check if user exists
    const result = await db
      .select()
      .from(users)
      .leftJoin(accounts, eq(users.id, accounts.userId))
      .where(eq(users.email, email));

    if (result.length === 0) {
      // User doesn't exist, create new user and account
      const hashedPassword = await hash(providedPassword, 10);
      const userId = randomUUID();
      const accountId = randomUUID();
      const sessionId = randomUUID();
      
      // Create user
      const [user] = await db
        .insert(users)
        .values({
          id: userId,
          name: email.split('@')[0], // Use email prefix as default name
          email,
          password: hashedPassword,
          emailVerified: false,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .returning();

      // Create account
      const [account] = await db
        .insert(accounts)
        .values({
          id: accountId,
          userId,
          providerId: email,
          accountId,
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .returning();

      // Create session
      const session = await db
        .insert(sessions)
        .values({
          id: sessionId,
          userId,
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
          createdAt: new Date(),
          updatedAt: new Date(),
          token: randomUUID(),
          ipAddress: request.ip,
          userAgent: request.headers.get('user-agent') || 'unknown'
        })
        .returning();

      // Set session cookie
      const cookie = serialize('session', session[0].token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
      });

      const response = NextResponse.json(
        {
          user: {
            ...user,
            accountId: account.id
          }
        },
        { status: 200 }
      );
      response.headers.append('Set-Cookie', cookie);

      return response;
    }

    const user = result[0].users;
    const account = result[0].accounts;

    if (!account?.password) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const passwordMatch = await compare(providedPassword, account.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create session
    const session = await db
      .insert(sessions)
      .values({
        userId: user.id,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        createdAt: new Date(),
        updatedAt: new Date(),
        token: randomUUID(),
        ipAddress: request.ip,
        userAgent: request.headers.get('user-agent') || 'unknown'
      })
      .returning();

    // Set session cookie
    const cookie = serialize('session', session[0].token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    const response = NextResponse.json(
      {
        user: {
          ...user,
          accountId: account.id
        }
      },
      { status: 200 }
    );
    response.headers.append('Set-Cookie', cookie);

    return response;
  } catch (error) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
