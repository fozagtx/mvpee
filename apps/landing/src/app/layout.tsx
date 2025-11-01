import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Whop Templates - Premium App Templates Starting at $4.99',
  description: 'Premium Whop App Templates - Start your business today',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-gray-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
