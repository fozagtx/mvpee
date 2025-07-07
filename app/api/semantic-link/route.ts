import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json();
    if (!content || typeof content !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid blog content.' }, { status: 400 });
    }

    // Prepare prompt for Mistral AI
    const prompt = `Generate a short, semantic, SEO-friendly blog link (slug) for the following blog content. The link should use hyphens and be similar to: hire-js-developer.\n\nBlog Content:\n${content}`;

    // Call Mistral AI API
    const mistralRes = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'mistral-tiny',
        messages: [
          { role: 'system', content: 'You are a helpful assistant that generates SEO-friendly blog slugs.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 20,
        temperature: 0.3,
      }),
    });

    if (!mistralRes.ok) {
      const error = await mistralRes.text();
      return NextResponse.json({ error: 'Mistral API error', details: error }, { status: 500 });
    }

    const mistralData = await mistralRes.json();
    const semanticLink = mistralData.choices?.[0]?.message?.content?.trim().replace(/^"|"$/g, '');

    if (!semanticLink) {
      return NextResponse.json({ error: 'Failed to generate semantic link.' }, { status: 500 });
    }

    return NextResponse.json({ semanticLink });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error', details: String(err) }, { status: 500 });
  }
} 