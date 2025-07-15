import { cn } from "@/lib/utils";

type Position =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "centerLeft"
  | "centerRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

interface ResizeHandleProps {
  position: Position;
  className?: string;
  visible?: boolean;
}

const positionStyles: Record<Position, string> = {
  topLeft: "top-0 left-0 cursor-nw-resize",
  topCenter: "top-0 left-1/2 -translate-x-1/2 cursor-n-resize",
  topRight: "top-0 right-0 cursor-ne-resize",
  centerLeft: "top-1/2 left-0 -translate-y-1/2 cursor-w-resize",
  centerRight: "top-1/2 right-0 -translate-y-1/2 cursor-e-resize",
  bottomLeft: "bottom-0 left-0 cursor-sw-resize",
  bottomCenter: "bottom-0 left-1/2 -translate-x-1/2 cursor-s-resize",
  bottomRight: "bottom-0 right-0 cursor-se-resize",
};

export function ResizeHandle({ position, className, visible = true }: ResizeHandleProps) {
  if (!visible) return null;

  return (
    <div
      className={cn(
        "absolute w-2 h-2 bg-white border border-gray-600 hover:bg-gray-200 transition-colors",
        positionStyles[position],
        className
      )}
    />
  );
}

export function ResizeHandleContainer({ children, className, showHandles = true }: {
  children: React.ReactNode;
  className?: string;
  showHandles?: boolean;
}) {
  return (
    <div className={cn("relative", className)}>
      {children}
      <ResizeHandle position="topLeft" visible={showHandles} />
      <ResizeHandle position="topCenter" visible={showHandles} />
      <ResizeHandle position="topRight" visible={showHandles} />
      <ResizeHandle position="centerLeft" visible={showHandles} />
      <ResizeHandle position="centerRight" visible={showHandles} />
      <ResizeHandle position="bottomLeft" visible={showHandles} />
      <ResizeHandle position="bottomCenter" visible={showHandles} />
      <ResizeHandle position="bottomRight" visible={showHandles} />
    </div>
  );
}
