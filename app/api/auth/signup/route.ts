import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { db } from "@/app/db/src";
import { users, accounts } from "@/app/db/src/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Check if user already exists
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create new user
    const newUser = await db.insert(users).values({
      email,
      name: email.split("@")[0],
      emailVerified: false,
      image: null
    }).returning();

    // Create associated account
    const { randomUUID } = await import('crypto');
    const newAccount = await db.insert(accounts).values({
      id: randomUUID(),
      userId: newUser[0].id,
      password: hashedPassword,
      accountId: "local",
      providerId: "credentials",
      createdAt: new Date(),
      updatedAt: new Date(),
    }).returning();

    return NextResponse.json(
      {
        user: {
          ...newUser[0],
          accountId: newAccount[0].id
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
