import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/app/db/src/index";


export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		usePlural: true,
	}),
	secret: process.env.BETTER_AUTH_SECRET,

	user: {
		deleteUser: {
			enabled: true,
		},
	},

	emailAndPassword: {
		enabled: true,

	},
	appName: "@seomint",
	trustedOrigins: ["localhost:3000"],
});

export type Auth = typeof auth;
