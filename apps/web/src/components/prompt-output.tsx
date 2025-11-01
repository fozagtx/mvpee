import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface PromptOutputProps {
  title: string;
  content: string;
  original?: string;
}

export default function PromptOutput({ title, content, original }: PromptOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  const improvementPercentage = original 
    ? Math.round(((content.length - original.length) / original.length) * 100)
    : 0;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              {title}
              {original && improvementPercentage > 0 && (
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  +{improvementPercentage}% enhanced
                </span>
              )}
            </CardTitle>
            <CardDescription>
              Enhanced version with better context and clarity
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="flex items-center gap-2"
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-4 rounded-lg">
          <pre className="whitespace-pre-wrap text-sm font-mono leading-relaxed">
            {content}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}