import { mistral } from '@ai-sdk/mistral';
import { generateText } from 'ai';

export const aiModel = mistral('mistral-large-latest');

export async function optimizePrompt(originalPrompt: string): Promise<string> {
  const systemPrompt = `You are an expert prompt engineer. Your task is to optimize user prompts for better context priming and more effective AI interactions.

Guidelines for optimization:
1. Add clear context and background information
2. Specify the desired output format
3. Include relevant constraints or requirements
4. Use specific, actionable language
5. Add examples when helpful
6. Structure the prompt logically
7. Remove ambiguity and vague terms
8. Add role-based context when appropriate

Transform the user's prompt into a well-structured, context-rich prompt that will yield better AI responses.

Return only the optimized prompt without any explanations or meta-commentary.`;

  try {
    const { text } = await generateText({
      model: aiModel,
      system: systemPrompt,
      prompt: `Original prompt: "${originalPrompt}"

Please optimize this prompt for better context priming and clearer instructions.`,
      temperature: 0.7,
      maxTokens: 1000,
    });

    return text.trim();
  } catch (error) {
    console.error('Error optimizing prompt:', error);
    throw new Error('Failed to optimize prompt');
  }
}

export async function analyzePrompt(prompt: string): Promise<{
  clarity: number;
  specificity: number;
  context: number;
  suggestions: string[];
}> {
  const systemPrompt = `You are a prompt analysis expert. Analyze the given prompt and provide scores (1-10) for:
- Clarity: How clear and unambiguous the prompt is
- Specificity: How specific and detailed the requirements are
- Context: How much relevant context is provided

Also provide 3-5 specific suggestions for improvement.

Respond in JSON format:
{
  "clarity": number,
  "specificity": number,
  "context": number,
  "suggestions": ["suggestion1", "suggestion2", ...]
}`;

  try {
    const { text } = await generateText({
      model: aiModel,
      system: systemPrompt,
      prompt: `Analyze this prompt: "${prompt}"`,
      temperature: 0.3,
      maxTokens: 500,
    });

    return JSON.parse(text.trim());
  } catch (error) {
    console.error('Error analyzing prompt:', error);
    throw new Error('Failed to analyze prompt');
  }
}