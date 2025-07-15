import { NextResponse, NextRequest } from "next/server";
import { compare } from "bcrypt";
import { db } from "@/app/db/src";
import { users, accounts } from "@/app/db/src/schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const { email, password: providedPassword } = await request.json();

    // Find user and their linked account
    const result = await db
      .select()
      .from(users)
      .leftJoin(accounts, eq(users.id, accounts.userId))
      .where(eq(users.email, email));

    if (result.length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
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

    return NextResponse.json(
      {
        user: {
          ...user,
          accountId: account.id
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
