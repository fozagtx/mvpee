"use client"

import useOnlineStatus  from "../app/hooks/useOnline"
import { Loader } from "../components/ui/loader";
import { PromptInput } from "../components/ui/prompt-input";
import { Textarea } from "../components/ui/textarea";
import { CircleArrowUp } from "lucide-react";
import Header from "../components/Header";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Toast } from "../components/ui/toast";

export const runtime = 'nodejs';

export default function Home() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [inputError, setInputError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [user] = useState(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const router = useRouter();


  const handleSubmit = async () => {
    if (!content.trim()) return;
    setInputError("");
    setLoading(true);
    setError("");
    setModalOpen(true);
    try {
      
      const res = await fetch("/api/gen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: content, targetLanguage: "English" }),
      });
      const data = await res.json();
      if (res.ok && data.id) {
        setToastMessage("Blog content generated! 🎉");
        setShowToast(true);
        setModalOpen(false);
        router.push(`/preview/${data.id}`);
      } else {
        console.error("API error:", data);
        setError(data.error || "Failed to generate blog content.");
      }
    } catch {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  };


  const isOnline = useOnlineStatus();

  return (
    <>
      <Header user={user} />
      <div className="relative z-10 min-h-screen flex flex-col overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e293b] to-[#fb7185]">
        <div className="absolute inset-0 bg-black/[0.05] [mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgNiA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImJsYWNrIi8+PC9zdmc+)] [mask-repeat:repeat]" aria-hidden="true" />
        <p className="text-blue">{isOnline? 'online': 'offline'}</p>
        <main className="flex-1 flex flex-col items-center justify-center min-h-screen py-16">
          <div className="w-full max-w-7xl mx-auto px-8 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-between border border-gray-200/20 rounded-lg relative">
            <div className="flex-1 w-full flex flex-col items-center justify-center space-y-12">
              {/* Title Section */}
              <div className="space-y-8 text-center">
                <div className="relative">
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center font-mono tracking-tight">
                    <span className="text-black inline-block">Produce a blog</span>
                  </h1>
                </div>
                <div className="relative">
                  <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-black font-sans tracking-normal max-w-[600px] mx-auto">
                    Produce SEO-optimized blog content instantly
                  </p>
                </div>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="flex flex-col items-center justify-center min-h-[120px]">
                  <Loader variant="pulse" size="md" text="Generating..." />
                  <div className="mt-2 text-white/700 text-sm font-sans">producing blog content, please wait...</div>
                </div>
              )}

              {/* Input Section */}
              {!loading && (
                <div className="w-full max-w-xl mx-auto">
                  <PromptInput isLoading={loading} value={content} onValueChange={setContent} onSubmit={handleSubmit} maxHeight={120}>
                    <div className="w-full flex flex-col items-stretch relative">
                      <div className="relative">
                        <Textarea
                          ref={inputRef}
                          value={content}
                          onChange={e => setContent(e.target.value)}
                          placeholder="Enter your blog topic ..."
                          disabled={loading}
                          className="w-full min-h-[48px] sm:min-h-[56px] max-h-[120px] resize-none overflow-auto text-base sm:text-lg px-3 sm:px-6 py-3 sm:py-5 pr-[120px] border-2 text-black placeholder:text-black/60 shadow-none focus:ring-2 focus:ring-black focus:border-black transition-all font-sans backdrop-blur"
                        />
                        <div className="absolute right-3 bottom-3 text-black">
                          {loading ? (
                            <Loader variant="dots" size="md" />
                          ) : (
                            <button
                              type="button"
                              aria-label="Generate preview"
                              onClick={handleSubmit}
                              className="focus:outline-none"
                            >
                              <CircleArrowUp
                                size={28}
                                className="transform hover:translate-y-[-2px] transition-transform cursor-pointer"
                              />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </PromptInput>
                  {inputError && (
                    <div className="text-center text-destructive animate-shake mt-2 font-sans">{inputError}</div>
                  )}
                  {error && !modalOpen && (
                    <div className="text-center text-destructive animate-shake mt-2 font-sans">{error}</div>
                  )}
                </div>
              )}
            </div>
          </div>



          <Toast
            open={showToast}
            onOpenChange={setShowToast}
            title={toastMessage}
            duration={1800}
          />
        </main>
      </div>
    </>
  );
}
