import {
  protectedProcedure, publicProcedure,
  router,
} from "../lib/trpc";
import { promptRouter } from "./prompt";

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),
  privateData: protectedProcedure.query(({ ctx }) => {
    return {
      message: "This is private",
      user: ctx.session.user,
    };
  }),
  prompt: promptRouter,
});
export type AppRouter = typeof appRouter;
