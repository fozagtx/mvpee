"use client";

import { useParams } from "next/navigation";
import { ResponseStream } from "@/components/ui/response-stream";
import Header from "@/components/Header";
import { Loader } from "@/components/ui/loader";
import React from "react";

export default function PreviewPage() {
  const { id } = useParams();
  const [textStream, setTextStream] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    async function fetchStream() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/gen?id=${id}`);
        if (!res.ok) throw new Error("Failed to fetch preview");
        const data = await res.text();
        setTextStream(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchStream();
  }, [id]);

  return (
    <>
      <Header user={null} />
      <div className="relative z-10 min-h-screen flex flex-col overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e293b] to-[#fb7185]">
        <main className="flex-1 flex flex-col items-center justify-center min-h-screen py-16">
          <div className="w-full max-w-5xl mx-auto px-8 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center border border-gray-200/20 rounded-lg relative">
            {loading ? (
              <div className="flex flex-col items-center justify-center min-h-[120px]">
                <Loader variant="pulse" size="md" text="Loading preview..." />
              </div>
            ) : error ? (
              <div className="text-center text-destructive animate-shake mt-2 font-sans">{error}</div>
            ) : (
              <ResponseStream textStream={textStream} />
            )}
          </div>
        </main>
      </div>
    </>
  );
}
