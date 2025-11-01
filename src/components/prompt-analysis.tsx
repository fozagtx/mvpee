import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Lightbulb } from "lucide-react";

interface AnalysisData {
  clarity: number;
  specificity: number;
  context: number;
  suggestions: string[];
}

interface PromptAnalysisProps {
  originalAnalysis?: AnalysisData;
  optimizedAnalysis?: AnalysisData;
}

export default function PromptAnalysis({ originalAnalysis, optimizedAnalysis }: PromptAnalysisProps) {
  if (!originalAnalysis) return null;

  const ScoreBar = ({ label, score, improvedScore }: { label: string; score: number; improvedScore?: number }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{label}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{score}/10</span>
          {improvedScore && improvedScore > score && (
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs">+{improvedScore - score}</span>
            </div>
          )}
        </div>
      </div>
      <div className="relative">
        <Progress value={score * 10} className="h-2" />
        {improvedScore && improvedScore > score && (
          <Progress 
            value={improvedScore * 10} 
            className="h-2 absolute top-0 opacity-60" 
          />
        )}
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Prompt Analysis
        </CardTitle>
        <CardDescription>
          Quality metrics and improvement suggestions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <ScoreBar 
            label="Clarity" 
            score={originalAnalysis.clarity} 
            improvedScore={optimizedAnalysis?.clarity}
          />
          <ScoreBar 
            label="Specificity" 
            score={originalAnalysis.specificity} 
            improvedScore={optimizedAnalysis?.specificity}
          />
          <ScoreBar 
            label="Context" 
            score={originalAnalysis.context} 
            improvedScore={optimizedAnalysis?.context}
          />
        </div>

        {originalAnalysis.suggestions.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Improvement Suggestions
            </h4>
            <ul className="space-y-2">
              {originalAnalysis.suggestions.map((suggestion, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        {optimizedAnalysis && (
          <div className="pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              Overall improvement: {' '}
              <span className="font-medium text-green-600">
                +{Math.round(((optimizedAnalysis.clarity + optimizedAnalysis.specificity + optimizedAnalysis.context) - 
                (originalAnalysis.clarity + originalAnalysis.specificity + originalAnalysis.context)) / 3 * 10)}%
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}