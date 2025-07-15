"use client"


import { Loader } from "../components/ui/loader";
import { CircleArrowUp } from "lucide-react";
import { PromptInput, PromptInputTextarea } from "../components/ui/prompt-input";
import React, { useState, useEffect } from "react";
import { Toast } from "../components/ui/toast";
import { EditorPreview } from "../components/EditorPreview";
import Header from "../components/Header";

export const runtime = 'nodejs';

export default function Home() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const [inputError, setInputError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [user] = useState(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async () => {
    if (!content.trim()) return;
    setInputError("");
    setLoading(true);
    setError("");
    setGeneratedLink("");
    setModalOpen(true);
    setShowEditor(false);
    try {
      const res = await fetch("/api/gen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: content, targetLanguage: "English" }),
      });
      const data = await res.json();
      if (res.ok && data.article) {
        console.log("Blog generated successfully:", data.article.substring(0, 100) + "...");
        setGeneratedLink(data.article);
        setToastMessage("Blog content generated! 🎉");
        setShowToast(true);
        setShowEditor(true);
        setModalOpen(false);
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

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e293b] to-[#fb7185] text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
          <p className="mt-4 text-lg text-black">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header user={user} />
      <div className="relative z-10 min-h-screen flex flex-col overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e293b] to-[#fb7185]">
        <div className="absolute inset-0 bg-black/[0.05] [mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgNiA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImJsYWNrIi8+PC9zdmc+)] [mask-repeat:repeat]" aria-hidden="true" />
        
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
                  <Loader variant="typing" size="md" text="Generating..." />
                  <div className="mt-2 text-white/700 text-sm font-sans">producing blog content, please wait...</div>
                </div>
              )}

              {/* Input Section */}
              {!showEditor && !loading && (
                <div className="w-full max-w-xl mx-auto">
                  <PromptInput isLoading={loading} value={content} onValueChange={setContent} onSubmit={handleSubmit} maxHeight={120}>
                    <div className="w-full flex flex-col items-stretch relative">
                      <div className="relative">
                        <PromptInputTextarea
                          ref={inputRef}
                          placeholder="Enter your blog topic ..."
                          disabled={loading}
                          className="w-full min-h-[48px] sm:min-h-[56px] max-h-[120px] resize-none overflow-auto text-base sm:text-lg px-3 sm:px-6 py-3 sm:py-5 pr-[120px] border-2 text-black placeholder:text-black/60 shadow-none focus:ring-2 focus:ring-black focus:border-black transition-all font-sans backdrop-blur"
                        />
                        <div className="absolute right-3 bottom-3 text-black">
                          {loading ? <Loader variant="dots" size="md" /> : <CircleArrowUp size={28} className="transform hover:translate-y-[-2px] transition-transform" />}
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

          {/* Editor Modal */}
          {showEditor && generatedLink && !loading && (
            <div className="fixed inset-0 z-20 flex flex-col bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e293b] to-[#fb7185]">
              <div className="absolute inset-0 backdrop-blur-sm bg-background/5" />
              <button
                className="absolute top-4 left-4 z-30 px-6 py-3 bg-background/10 backdrop-blur-md border border-white/20 text-white rounded-2xl shadow-lg hover:bg-accent/20 transition-all duration-300 font-mono flex items-center gap-2"
                onClick={() => {
                  console.log("Closing editor");
                  setShowEditor(false);
                }}
              >
                ← Back
              </button>
              <div className="relative z-20 w-full h-full flex-1 flex items-center justify-center p-4 sm:p-8">
                <div className="w-full max-w-5xl h-full bg-background/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
                  <EditorPreview content={generatedLink} fullHeight />
                </div>
              </div>
            </div>
          )}

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
