"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Copy, Sparkles, BarChart3, Zap } from "lucide-react";
import Header from "@/components/header";
import PromptInput from "@/components/prompt-input";
import PromptOutput from "@/components/prompt-output";
import PromptAnalysis from "@/components/prompt-analysis";

interface OptimizeResponse {
  original: string;
  optimized: string;
}

interface AnalysisData {
  clarity: number;
  specificity: number;
  context: number;
  suggestions: string[];
}

interface AnalyzeResponse {
  prompt: string;
  analysis: AnalysisData;
}

interface OptimizeWithAnalysisResponse {
  original: string;
  optimized: string;
  originalAnalysis: AnalysisData;
  optimizedAnalysis: AnalysisData;
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState<"optimize" | "analyze" | "both">("both");
  const [isLoading, setIsLoading] = useState(false);
  const [optimizeResult, setOptimizeResult] = useState<OptimizeResponse | null>(null);
  const [analyzeResult, setAnalyzeResult] = useState<AnalyzeResponse | null>(null);
  const [bothResult, setBothResult] = useState<OptimizeWithAnalysisResponse | null>(null);

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt to optimize");
      return;
    }

    setIsLoading(true);
    setOptimizeResult(null);
    setAnalyzeResult(null);
    setBothResult(null);

    try {
      const response = await fetch(`/api/prompt/${mode}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to process prompt");
      }

      const data = await response.json();

      switch (mode) {
        case "optimize":
          setOptimizeResult(data);
          toast.success("Prompt optimized successfully!");
          break;
        case "analyze":
          setAnalyzeResult(data);
          toast.success("Prompt analyzed successfully!");
          break;
        case "both":
          setBothResult(data);
          toast.success("Prompt optimized and analyzed successfully!");
          break;
      }
    } catch (error) {
      toast.error("Failed to process prompt. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-primary" />
            Prompt Optimizer
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your prompts into powerful, context-rich instructions that get better AI responses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Input Prompt
                </CardTitle>
                <CardDescription>
                  Enter your original prompt that you want to optimize
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <PromptInput
                  value={prompt}
                  onChange={setPrompt}
                  placeholder="Enter your prompt here..."
                />
                
                <div className="space-y-2">
                  <Label>Optimization Mode</Label>
                  <div className="flex gap-2">
                    <Button
                      variant={mode === "optimize" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMode("optimize")}
                    >
                      Optimize Only
                    </Button>
                    <Button
                      variant={mode === "analyze" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMode("analyze")}
                    >
                      Analyze Only
                    </Button>
                    <Button
                      variant={mode === "both" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setMode("both")}
                    >
                      Both
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isLoading || !prompt.trim()}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    "Processing..."
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      {mode === "optimize" ? "Optimize Prompt" : 
                       mode === "analyze" ? "Analyze Prompt" : 
                       "Optimize & Analyze"}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            {/* Optimized Prompt */}
            {(optimizeResult || bothResult) && (
              <PromptOutput
                title="Optimized Prompt"
                content={optimizeResult?.optimized || bothResult?.optimized || ""}
                original={optimizeResult?.original || bothResult?.original || ""}
              />
            )}

            {/* Analysis Results */}
            {(analyzeResult || bothResult) && (
              <PromptAnalysis
                originalAnalysis={analyzeResult?.analysis || bothResult?.originalAnalysis}
                optimizedAnalysis={bothResult?.optimizedAnalysis}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}