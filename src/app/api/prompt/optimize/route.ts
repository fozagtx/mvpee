import { NextRequest, NextResponse } from "next/server";
import { optimizePrompt } from "@/lib/ai";
import { z } from "zod";

const schema = z.object({
  prompt: z.string().min(1, "Prompt cannot be empty").max(2000, "Prompt too long"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt } = schema.parse(body);

    const optimizedPrompt = await optimizePrompt(prompt);

    return NextResponse.json({
      original: prompt,
      optimized: optimizedPrompt,
    });
  } catch (error) {
    console.error("Error optimizing prompt:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to optimize prompt" },
      { status: 500 }
    );
  }
}