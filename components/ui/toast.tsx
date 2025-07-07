"use client";
import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/lib/utils";

export function Toast({
  open,
  onOpenChange,
  title,
  description,
  action,
  duration = 2000,
  className,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <ToastPrimitive.Provider swipeDirection="right" duration={duration}>
      <ToastPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        className={cn(
          "bg-white border border-gray-200 shadow-lg rounded-lg px-4 py-3 flex items-center gap-3 min-w-[220px] max-w-xs text-gray-900 animate-in fade-in slide-in-from-bottom-4",
          className
        )}
      >
        <div className="flex-1">
          {title && <div className="font-semibold mb-0.5">{title}</div>}
          {description && <div className="text-sm text-gray-600">{description}</div>}
        </div>
        {action}
        <ToastPrimitive.Close className="ml-2 text-gray-400 hover:text-gray-700 text-lg font-bold">×</ToastPrimitive.Close>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-auto max-w-xs outline-none" />
    </ToastPrimitive.Provider>
  );
} 