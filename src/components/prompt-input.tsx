import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function PromptInput({ value, onChange, placeholder }: PromptInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="prompt-input">Your Prompt</Label>
      <Textarea
        id="prompt-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="min-h-[200px] resize-none"
        maxLength={2000}
      />
      <div className="text-sm text-muted-foreground text-right">
        {value.length}/2000 characters
      </div>
    </div>
  );
}