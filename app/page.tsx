"use client";

import dynamic from "next/dynamic";
const ShaderBackground = dynamic(() => import("../components/ShaderBackground"), { ssr: false });
import { Loader } from "../components/ui/loader";
import { CircleArrowUp } from "lucide-react";
import { PromptInput, PromptInputTextarea, PromptInputActions } from "../components/ui/prompt-input";
import { Button } from "../components/ui/button";
import React, { useState } from "react";
import { Toast } from "../components/ui/toast";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Header from "../components/Header";

function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[6px]">
      <div className="bg-white rounded-xl shadow-lg p-6 min-w-[320px] max-w-[90vw] relative flex flex-col items-center justify-center focus:outline-none" tabIndex={-1}>
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [inputError, setInputError] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { width, height } = useWindowSize();
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  // Helper to count words
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const isTooShort = wordCount > 0 && wordCount < 300;

  const handleSubmit = async () => {
    if (!content.trim()) return;
    if (wordCount < 300) {
      setInputError("Blog content must be at least 300 words.");
      return;
    } else {
      setInputError("");
    }
    setLoading(true);
    setError("");
    setGeneratedLink("");
    setModalOpen(true);
    setCopied(false);
    try {
      const res = await fetch("/api/semantic-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      const data = await res.json();
      if (res.ok && data.semanticLink) {
        setGeneratedLink(data.semanticLink);
        setShowConfetti(true);
        setToastMessage("Semantic link generated! 🎉");
        setShowToast(true);
        setTimeout(() => setShowConfetti(false), 2200);
      } else {
        setError(data.error || "Failed to generate link.");
      }
    } catch {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (generatedLink) {
      await navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setToastMessage("Copied to clipboard!");
      setShowToast(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setGeneratedLink("");
    setError("");
    setLoading(false);
  };

  return (
    <>
      <Header />
      <ShaderBackground />
      <div className="relative z-10 min-h-screen flex flex-col overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e293b] to-[#fb7185] text-black">
        <main className="flex-1 flex flex-col items-center justify-center py-8 px-2 sm:py-12 sm:px-4">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-center font-sans drop-shadow-lg flex flex-wrap items-center justify-center gap-2 leading-tight break-words">
            <h1 className="scroll-m-20 text-center text-white text-4xl font-extrabold tracking-tight text-balance">  Blog to semantic link </h1>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-xl text-white mb-6 sm:mb-10 text-center font-sans">Create SEO-friendly links for your blog posts instantly.</p>
          <div className="w-full max-w-full sm:max-w-2xl flex flex-col items-center">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full max-w-full sm:max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl px-2 sm:px-6 py-4 sm:py-6 mx-auto text-black">
                <PromptInput isLoading={loading} value={content} onValueChange={setContent} onSubmit={handleSubmit} maxHeight={120}>
                  <div className="w-full flex flex-col gap-3 items-stretch">
                    <PromptInputTextarea
                      ref={inputRef}
                      placeholder="create a semantic link for your blog..."
                      disabled={loading}
                      className="w-full min-h-[48px] sm:min-h-[56px] max-h-[120px] resize-none overflow-auto text-base sm:text-lg px-3 sm:px-6 py-3 sm:py-5 rounded-2xl border border-white/20 bg-white/10 text-black placeholder:text-slate-600 shadow-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all font-sans backdrop-blur"
                    />
                    <PromptInputActions className="flex justify-end mt-2">
                       <Button
                        onClick={handleSubmit}
                        disabled={loading || !content.trim() || isTooShort}
                        className="h-10 w-full sm:w-auto px-6 sm:px-8 text-base rounded-xl shadow-md bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold border-none hover:from-pink-400 hover:to-orange-300"
                      >
                        {loading ? <Loader variant="dots" size="sm" /> :<CircleArrowUp size={28} />}
                      </Button>
                    </PromptInputActions>
                  </div>
                </PromptInput>
                {inputError && (
                  <div className="text-center text-red-500 animate-shake mt-2">{inputError}</div>
                )}
                <div className="text-xs text-white mt-1 text-center">{wordCount} / 300 words minimum</div>
                {error && !modalOpen && (
                  <div className="text-center text-red-500 animate-shake mt-2">{error}</div>
                )}
              </div>
            </div>
          </div>
          <Modal open={modalOpen} onClose={handleCloseModal}>
            {showConfetti && <Confetti width={width} height={height} numberOfPieces={180} recycle={false} gravity={0.25} colors={["#FFEB3B","#FF9800","#F44336","#FFD600","#FF5252"]} />}
            {loading && (
              <div className="flex flex-col items-center justify-center min-h-[120px]">
                <Loader variant="typing" size="md" text="Generating..." />
                <div className="mt-2 text-gray-500 text-sm">Generating your semantic link...</div>
              </div>
            )}
            {!loading && generatedLink && (
              <div className="flex flex-col items-center justify-center min-h-[120px]">
                <div className="text-lg font-semibold mb-2">Your Semantic Link</div>
                <div className="bg-gray-100 rounded px-4 py-2 text-center text-primary font-mono text-base break-all mb-4 select-all">
                  {generatedLink}
                </div>
                <Button onClick={handleCopy} className="mb-2 w-full">
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
                <Button variant="secondary" onClick={handleCloseModal} className="w-full">Close</Button>
              </div>
            )}
            {!loading && error && (
              <div className="flex flex-col items-center justify-center min-h-[120px]">
                <div className="text-red-500 mb-2">{error}</div>
                <Button variant="secondary" onClick={handleCloseModal} className="w-full">Close</Button>
              </div>
            )}
          </Modal>
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

