export const runtime = "edge";
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const ArticleRequestSchema = z.object({
  prompt: z.string().min(1).max(500),
  targetLanguage: z.string().min(1).max(50),
});

async function callMistral(prompt: string, systemPrompt: string): Promise<string> {
  const mistralRes = await fetch('https://api.mistral.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'mistral-tiny',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt },
      ],
      max_tokens: 4096,
      temperature: 0.7,
    }),
  });

  if (!mistralRes.ok) {
    const error = await mistralRes.text();
    throw new Error(`Mistral API error: ${mistralRes.status} - ${error}`);
  }

  const mistralData = await mistralRes.json();
  return mistralData.choices?.[0]?.message?.content?.trim() || '';
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parseResult = ArticleRequestSchema.safeParse(json);
    
    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid request', details: parseResult.error.errors }, 
        { status: 400 }
      );
    }

    const { prompt, targetLanguage } = parseResult.data;

    // Step 1: Generate Outline
    const outlinePrompt = `Create a comprehensive outline for a long-form article about "${prompt}". 
    The outline should include:
    - At least 15-20 detailed headings and subheadings
    - Clear structure that covers the entire topic
    - Logical flow from introduction to conclusion
    
    Present the outline in a clear, organized format.`;
    
    const systemPrompt = 'You are a professional content strategist. Create well-structured, informative content outlines and articles without using emojis.';
    
    const outline = await callMistral(outlinePrompt, systemPrompt);

    // Step 2: Generate Article
    const articlePrompt = `Using the outline below, write a comprehensive, informative article about "${prompt}" in ${targetLanguage}.

    Requirements:
    - Minimum 2000 words
    - Use proper markdown formatting for headers
    - Write in a formal, informative tone
    - Include an introduction and conclusion
    - Add 5-6 relevant FAQs at the end
    - Use the topic "${prompt}" naturally throughout the content
    - Include at least one external reference link
    - Structure content with clear paragraphs, lists, and sections for readability

    Topic: ${prompt}
    Language: ${targetLanguage}
    
    Outline to follow:
    ${outline}`;

    const article = await callMistral(articlePrompt, systemPrompt);

    return NextResponse.json({ 
      outline, 
      article,
      success: true 
    });

  } catch (error) {
    console.error('Article generation error:', error);
    
    if (error instanceof Error && error.message.includes('Mistral API error')) {
      return NextResponse.json(
        { error: 'External API error', message: 'Unable to generate content at this time' }, 
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error', message: 'Something went wrong' }, 
      { status: 500 }
    );
  }
}