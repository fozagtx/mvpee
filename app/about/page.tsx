"use client";

import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header user={null} />
      <div className="relative z-10 min-h-screen flex flex-col overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e293b] to-[#fb7185]">
        <main className="flex-1 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            <Card className="bg-background/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-4xl font-mono text-black text-center">About Mvpee</CardTitle>
                <CardDescription className="text-xl font-mono text-center">
                  The Future of SEO-Optimized Content Generation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-black font-mono">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                  <p className="text-lg">
                    Mvpee is dedicated to revolutionizing content creation through advanced AI technology. 
                    We empower creators, marketers, and businesses to produce high-quality, 
                    SEO-optimized content efficiently and effectively.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">What We Offer</h2>
                  <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Instant blog content generation</li>
                    <li>SEO-optimized writing</li>
                    <li>Smart content structuring</li>
                    <li>Multi-language support</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Why Choose Mvpee</h2>
                  <p className="text-lg">
                    Our platform combines cutting-edge AI technology with SEO best practices to deliver
                    content that not only reads naturally but also ranks well in search engines.
                    Whether you&apos;re a solo creator or a large enterprise, Mvpee adapts to your needs.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-white/5 rounded border border-white/10">
                  <p className="text-lg text-center">
                    Ready to transform your content creation process?{" "}
                    <Link href="/" className="text-pink-400 hover:underline">
                      Get started today
                    </Link>
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
