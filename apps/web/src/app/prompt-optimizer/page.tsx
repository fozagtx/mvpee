"use client";

import { useState } from "react";
import { trpc } from "@/utils/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Copy, Sparkles, BarChart3, Zap } from "lucide-react";
import Header from "@/components/header";
import PromptInput from "@/components/prompt-input";
import PromptOutput from "@/components/prompt-output";
import PromptAnalysis from "@/components/prompt-analysis";

export default function PromptOptimizerPage() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState<"optimize" | "analyze" | "both">("both");

  const optimizeMutation = trpc.prompt.optimize.useMutation({
    onSuccess: () => {
      toast.success("Prompt optimized successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const analyzeMutation = trpc.prompt.analyze.useMutation({
    onSuccess: () => {
      toast.success("Prompt analyzed successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const optimizeWithAnalysisMutation = trpc.prompt.optimizeWithAnalysis.useMutation({
    onSuccess: () => {
      toast.success("Prompt optimized and analyzed successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt to optimize");
      return;
    }

    switch (mode) {
      case "optimize":
        optimizeMutation.mutate({ prompt });
        break;
      case "analyze":
        analyzeMutation.mutate({ prompt });
        break;
      case "both":
        optimizeWithAnalysisMutation.mutate({ prompt });
        break;
    }
  };

  const isLoading = optimizeMutation.isPending || analyzeMutation.isPending || optimizeWithAnalysisMutation.isPending;

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
            {(optimizeMutation.data || optimizeWithAnalysisMutation.data) && (
              <PromptOutput
                title="Optimized Prompt"
                content={optimizeMutation.data?.optimized || optimizeWithAnalysisMutation.data?.optimized || ""}
                original={optimizeMutation.data?.original || optimizeWithAnalysisMutation.data?.original || ""}
              />
            )}

            {/* Analysis Results */}
            {(analyzeMutation.data || optimizeWithAnalysisMutation.data) && (
              <PromptAnalysis
                originalAnalysis={analyzeMutation.data?.analysis || optimizeWithAnalysisMutation.data?.originalAnalysis}
                optimizedAnalysis={optimizeWithAnalysisMutation.data?.optimizedAnalysis}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}