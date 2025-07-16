import { createAuthClient } from "better-auth/react";

export const { signIn, useSession } = createAuthClient({
	baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH,
});
