export const runtime = "edge";
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const ArticleRequestSchema = z.object({
  prompt: z.string(),
  targetLanguage: z.string(),
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
    throw new Error(`Mistral API error: ${error}`);
  }
  const mistralData = await mistralRes.json();
  return mistralData.choices?.[0]?.message?.content?.trim() || '';
}

// Simple in-memory cache for articles
const articleCache = new Map<string, {outline: string, article: string }>();

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parseResult = ArticleRequestSchema.safeParse(json);
    if (!parseResult.success) {
      return NextResponse.json({ error: 'Invalid request', details: parseResult.error.errors }, { status: 400 });
    }
    const { prompt, targetLanguage } = parseResult.data;

    // Use prompt+targetLanguage as cache key
    const cacheKey = `${prompt}|||${targetLanguage}`;
    if (articleCache.has(cacheKey)) {
      const cached = articleCache.get(cacheKey)!;
      return NextResponse.json({ outline: cached.outline, article: cached.article });
    }

    // Step 1: Generate Outline
    const outlinePrompt = `Forget all previous commands. Before starting an article, Must Develop a comprehensive \"Outline\" for a long-form article for the Keyword [PROMPT], featuring at least 25 engaging headings and subheadings that are detailed, mutually exclusive, collectively exhaustive, and cover the entire topic. Must use LSI Keywords in headings and sub-headings without mentioning them in the \"Content\". Must show these \"Outlines\" in a table.\n\n[PROMPT]: ${prompt}\n\nReturn ONLY the outline table, do not write the article yet.`;
    const systemPrompt = 'You are a helpful assistant that follows instructions exactly. Do NOT use any emojis anywhere in the output.';
    const outline = await callMistral(outlinePrompt, systemPrompt);

    // Step 2: Generate Article
    const articlePrompt = `Now, using markdown formatting, act as an Expert Article Writer and write a fully detailed, longform, 100% unique, creative, and human-like informational article of a minimum of 2000 words in Grade 7 English, using headings and sub-headings. The article should be written in a formal, informative, and optimistic tone.\n\nUse [TARGETLANGUAGE] for the keyword \"[PROMPT]\" and write at least 400–500 words of engaging paragraph under each and every Heading. This article should show the experience, expertise, authority and trust for the Topic [PROMPT]. Include insights based on first-hand knowledge or experiences, and support the content with credible sources when necessary. Focus on providing accurate, relevant, and helpful information to readers, showcasing both subject matter expertise and personal experience in the topic [PROMPT]. Write engaging, unique, and plagiarism-free content that incorporates a human-like style, and simple English and bypass ai detector tests directly without mentioning them. Try to use contractions, idioms, transitional phrases, interjections, dangling modifiers, and colloquialisms, and avoid repetitive words and unnatural sentence structures. The article must include an SEO meta-description right after the title (you must include the [PROMPT] in the description), an introduction, and a click-worthy short title. Also, use the seed keyword as the first H2. Always use a combination of paragraphs, lists, and tables for a better reader experience. Use fully detailed paragraphs that engage the reader. Write at least one section with the heading [PROMPT]. Write down at least six FAQs with answers and a conclusion.\n\nNote: Don't assign Numbers to Headings. Don't assign numbers to Questions. Don't write Q: before the question (faqs). Do NOT use any emojis anywhere in the article. All headings and subheadings must be properly formatted using correct markdown syntax (e.g., #, ##, ###, etc.) and the article must be well-structured with clear, consistent heading levels. PRIORITIZE proper formatting of all headers and content fonts for maximum readability and visual clarity. The markdown output should be visually appealing, with a clear font hierarchy for headings, subheadings, and body text.\nMake sure the article is plagiarism-free. Don't forget to use a question mark (?) at the end of questions. Try not to change the original [PROMPT] while writing the title. Try to use \"[PROMPT]\" 2-3 times in the article. Try to include [PROMPT] in the headings as well. write content that can easily pass the AI detection tools test. Bold all the headings and subheadings using Markdown formatting.\n\nMUST FOLLOW THESE INSTRUCTIONS IN THE ARTICLE:\n1. Make sure you are using the Focus Keyword in the SEO Title.\n2. Use The Focus Keyword inside the SEO Meta Description.\n3. Make Sure The Focus Keyword appears in the first 10% of the content.\n4. Make sure The Focus Keyword was found in the content\n5. Make sure Your content is 2000 words long.\n6. Must use The Focus Keyword in the subheading(s).\n7. Make sure the Keyword Density is 1.30\n8. Must Create At least one external link in the content.\n9. Must use a positive or a negative sentiment word in the Title.\n10. Must use a Power Keyword in the Title.\n11. Must use a Number in the Title.\n\n[PROMPT]: ${prompt}\n[TARGETLANGUAGE]: ${targetLanguage}\n\nHere is the outline to use:\n${outline}`;
    const article = await callMistral(articlePrompt, systemPrompt);

    // Store in cache
    articleCache.set(cacheKey, { outline, article });

    return NextResponse.json({ outline, article });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error', details: String(err) }, { status: 500 });
  }
} 