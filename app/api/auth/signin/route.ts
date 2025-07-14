import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import { db } from "@/app/db/src";
import { users } from "@/app/db/src/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Find user by email
    const user = await db.select().from(users).where(eq(users.email, email));
    
    if (user.length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Compare password
    const passwordMatch = await compare(password, user[0].password);

    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const { password: _, ...userWithoutPassword } = user[0];

    return NextResponse.json(
      { user: userWithoutPassword },
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
