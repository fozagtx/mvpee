import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const cameraPlain = {
	variable: "__CameraPlainVariable_83c9a9",
};

export const metadata: Metadata = {
	title: "n8n for seo",
	description: "add a great seo presence for your saas , gain users on autopilot .",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<Script
					src="//unpkg.com/react-scan/dist/auto.global.js"
					strategy="afterInteractive"
					crossOrigin="anonymous"
				/>
			</head>
			<body suppressHydrationWarning
				className={`${geistSans.variable} ${geistMono.variable} ${cameraPlain.variable} antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
