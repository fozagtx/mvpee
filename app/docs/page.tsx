"use client";

import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocsPage() {
  return (
    <>
      <Header user={null} />
      <div className="relative z-10 min-h-screen flex flex-col overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e293b] to-[#fb7185]">
        <main className="flex-1 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            <Card className="bg-background/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-4xl font-mono text-black text-center">Documentation</CardTitle>
                <CardDescription className="text-xl font-mono text-center">
                  Learn how to use Mvpee effectively
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 text-black font-mono">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Getting Started</h2>
                  <div className="space-y-2 text-lg">
                    <p>Follow these simple steps to start generating SEO-optimized content:</p>
                    <ol className="list-decimal list-inside space-y-2 pl-4">
                      <li>Sign in to your Mvpee account</li>
                      <li>Enter your blog topic in the input field</li>
                      <li>Click the generate button</li>
                      <li>Review and edit your generated content</li>
                    </ol>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Best Practices</h2>
                  <div className="grid gap-4">
                    <Card className="bg-white/5 border border-white/10">
                      <CardHeader>
                        <CardTitle className="text-xl">Topic Selection</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Be specific with your topics. Instead of &quot;write about cars&quot;, try &quot;write about electric vehicle maintenance tips&quot;.</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/5 border border-white/10">
                      <CardHeader>
                        <CardTitle className="text-xl">Content Review</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Always review and customize the generated content to match your brand voice and ensure accuracy.</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/5 border border-white/10">
                      <CardHeader>
                        <CardTitle className="text-xl">SEO Optimization</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our AI automatically includes relevant keywords, but you can enhance SEO further by adding your target keywords to the prompt.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">API Reference</h2>
                  <p className="text-lg">
                    Mvpee offers a powerful API for integration with your existing tools. Contact us for API access and documentation.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-white/5 rounded border border-white/10">
                  <p className="text-lg text-center">
                    Need help? Contact our support team at{" "}
                    <a href="mailto:support@mvpee.com" className="text-pink-400 hover:underline">
                      support@mvpee.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
