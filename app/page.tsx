"use client";

// import Header from "../components/Header";
import { Loader } from "../components/ui/loader";
import { PromptInput, PromptInputTextarea, PromptInputActions } from "../components/ui/prompt-input";
import { Button } from "../components/ui/button";
import React, { useState } from "react";
import { Toast } from "../components/ui/toast";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

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
  const [inputRows, setInputRows] = useState(1);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  // Helper to count words
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const isTooShort = wordCount > 0 && wordCount < 300;

  // Dynamically update input rows based on content
  React.useEffect(() => {
    if (inputRef.current) {
      const lineHeight = 28; // px, matches text-lg/leading-7
      const lines = Math.floor(inputRef.current.scrollHeight / lineHeight);
      setInputRows(Math.max(1, lines));
    }
  }, [content]);

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
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Studio Ghibli-inspired dreamy background */}
      <div className="absolute inset-0 -z-10">
        {/* Sky/field gradient */}
        <div className="w-full h-full bg-gradient-to-br from-[#595c5e] via-[#6e8b75] to-[#f9e7c2]" />
        {/* Dreamy haze */}
        <div className="absolute inset-0 bg-gradient-radial from-white/60 via-transparent to-transparent opacity-80" />
        {/* Painterly clouds */}
        <div className="absolute top-[-10%] left-[10%] w-[40vw] h-[18vw] bg-white/60 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-[20%] right-[5%] w-[30vw] h-[12vw] bg-[#f9e7c2]/60 rounded-full blur-2xl opacity-60" />
        <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[14vw] bg-[#d0f5d8]/60 rounded-full blur-2xl opacity-60" />
        <div className="absolute bottom-[-5%] right-[10%] w-[45vw] h-[20vw] bg-white/50 rounded-full blur-3xl opacity-50" />
      </div>
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center font-sans">Blog to semantic link in seconds</h1>
        <div className="w-full max-w-xl flex flex-col rounded-2xl shadow-inner bg-gray-50 p-8">
          <PromptInput isLoading={loading} value={content} onValueChange={setContent} onSubmit={handleSubmit} maxHeight={120}>
            <div className={`w-full flex flex-col gap-2 items-stretch`}>
              <div className="relative w-full">
                <PromptInputTextarea
                  ref={inputRef}
                  placeholder="Paste your blog content here..."
                  disabled={loading}
                  className="min-h-[56px] md:min-h-[56px] max-h-[120px] resize-none overflow-auto flex-1 text-lg px-4 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all pr-24"
                  style={{paddingRight: inputRows <= 2 ? '6rem' : undefined}}
                />
                {inputRows <= 2 && (
                  <PromptInputActions className="absolute right-2 top-1/2 -translate-y-1/2 flex-none flex items-center">
                    <Button
                      onClick={handleSubmit}
                      disabled={loading || !content.trim() || isTooShort}
                      className="h-10 px-5 text-base rounded-lg shadow-md"
                    >
                      {loading ? <Loader variant="dots" size="sm" /> : "Crawl"}
                    </Button>
                  </PromptInputActions>
                )}
              </div>
              {inputRows > 2 && (
                <PromptInputActions className="flex-none flex items-center justify-end mt-1">
                  <Button
                    onClick={handleSubmit}
                    disabled={loading || !content.trim() || isTooShort}
                    className="h-10 px-5 text-base rounded-lg shadow-md"
                  >
                    {loading ? <Loader variant="dots" size="sm" /> : "Crawl"}
                  </Button>
                </PromptInputActions>
              )}
            </div>
          </PromptInput>
          {inputError && (
            <div className="text-center text-red-500 animate-shake mt-2">{inputError}</div>
          )}
          <div className="text-xs text-gray-500 mt-1 text-center">{wordCount} / 300 words minimum</div>
          {error && !modalOpen && (
            <div className="text-center text-red-500 animate-shake mt-2">{error}</div>
          )}
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
  );
}
