"use client";

import React, { useEffect, useRef, useState } from "react";

interface EditorPreviewProps {
  content: string;
  onContentChange?: (data: string) => void;
  fullHeight?: boolean;
}

export const EditorPreview: React.FC<EditorPreviewProps> = ({ content, onContentChange, fullHeight }) => {
  const editorRef = useRef<{ save: () => Promise<unknown>; destroy: () => void } | null>(null);
  const holderRef = useRef<HTMLDivElement>(null);
  const [, setEditorContent] = useState(content);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !holderRef.current || editorRef.current) return;

    const initEditor = async () => {
      const EditorJS = (await import("@editorjs/editorjs")).default;
      const Header = (await import("@editorjs/header")).default;
      const List = (await import("@editorjs/list")).default;
      const Quote = (await import("@editorjs/quote")).default;
      const Delimiter = (await import("@editorjs/delimiter")).default;
      const Code = (await import("@editorjs/code")).default;
      const Table = (await import("@editorjs/table")).default;
      const InlineCode = (await import("@editorjs/inline-code")).default;

      editorRef.current = new EditorJS({
        holder: holderRef.current!,
        data: {
          blocks: [
            {
              type: "paragraph",
              data: { text: content },
            },
          ],
        },
        tools: {
          header: Header,
          list: List,
          quote: Quote,
          delimiter: Delimiter,
          code: Code,
          table: Table,
          inlineCode: InlineCode,
        },
        onChange: async () => {
          const data = await editorRef.current?.save();
          setEditorContent(JSON.stringify(data));
          onContentChange?.(JSON.stringify(data));
        },
        autofocus: true,
        minHeight: 0,
      });
    };

    initEditor();

    return () => {
      if (editorRef.current) {
        try {
          editorRef.current.destroy();
        } catch (error) {
          console.error("Error destroying editor:", error);
        }
        editorRef.current = null;
      }
    };
  }, [isClient, content, onContentChange]);

  useEffect(() => {
    setEditorContent(content);
  }, [content]);

  return (
    <div className={`flex w-full ${fullHeight ? 'h-screen' : 'h-[70vh]'} overflow-auto`} style={{background: 'radial-gradient(ellipse at center, #0f172a 0%, #1e293b 60%, #fb7185 100%)'}}>
      <div className="w-full flex items-start justify-center p-8">
        <style>{`
          .blog-editorjs-prose h1, .blog-editorjs-prose .ce-header[data-header="1"] {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            border-bottom: 4px solid #fb7185;
            padding-bottom: 0.5rem;
            letter-spacing: -0.02em;
          }
          .blog-editorjs-prose h2, .blog-editorjs-prose .ce-header[data-header="2"] {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1.25rem;
            border-bottom: 3px solid #fb7185;
            padding-bottom: 0.4rem;
            letter-spacing: -0.01em;
          }
          .blog-editorjs-prose h3, .blog-editorjs-prose .ce-header[data-header="3"] {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            border-bottom: 2px solid #fb7185;
            padding-bottom: 0.3rem;
          }
          .blog-editorjs-prose .ce-header {
            font-family: inherit;
            color: #000;
          }
          .blog-editorjs-prose .ce-header::before {
            content: none !important;
          }
        `}</style>
        <div
          ref={holderRef}
          className="w-full max-w-4xl min-h-[60vh] rounded-2xl shadow-2xl bg-white/95 p-8 border border-pink-200 blog-editorjs-prose"
          style={{
            fontFamily: "__CameraPlainVariable_83c9a9, __CameraPlainVariable_Fallback_83c9a9",
            color: "#000",
            fontSize: "20px",
            lineHeight: "25px"
          }}
        />
      </div>
    </div>
  );
}; 