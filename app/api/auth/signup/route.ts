import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { db } from "@/app/db/src";
import { users } from "@/app/db/src/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Check if user already exists
    const existingUser = await db.select().from(users).where(eq(users.email, email));
    
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
      password: hashedPassword,
    }).returning();

    const { password: _, ...userWithoutPassword } = newUser[0];

    return NextResponse.json(
      { user: userWithoutPassword },
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
