import { z } from 'zod';
import { router, publicProcedure } from '../lib/trpc';
import { optimizePrompt, analyzePrompt } from '../lib/ai';

export const promptRouter = router({
  optimize: publicProcedure
    .input(
      z.object({
        prompt: z.string().min(1, 'Prompt cannot be empty').max(2000, 'Prompt too long'),
      })
    )
    .mutation(async ({ input }) => {
      const optimizedPrompt = await optimizePrompt(input.prompt);
      return {
        original: input.prompt,
        optimized: optimizedPrompt,
      };
    }),

  analyze: publicProcedure
    .input(
      z.object({
        prompt: z.string().min(1, 'Prompt cannot be empty').max(2000, 'Prompt too long'),
      })
    )
    .query(async ({ input }) => {
      const analysis = await analyzePrompt(input.prompt);
      return {
        prompt: input.prompt,
        analysis,
      };
    }),

  optimizeWithAnalysis: publicProcedure
    .input(
      z.object({
        prompt: z.string().min(1, 'Prompt cannot be empty').max(2000, 'Prompt too long'),
      })
    )
    .mutation(async ({ input }) => {
      const [optimizedPrompt, analysis] = await Promise.all([
        optimizePrompt(input.prompt),
        analyzePrompt(input.prompt),
      ]);

      return {
        original: input.prompt,
        optimized: optimizedPrompt,
        originalAnalysis: analysis,
        optimizedAnalysis: await analyzePrompt(optimizedPrompt),
      };
    }),
});