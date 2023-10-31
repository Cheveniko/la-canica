"use client";
import { FC } from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import Toolbar from "./Toolbar";

type TiptapProps = {
  onChange: (richText: string) => void;
  content?: string;
};

const Tiptap: FC<TiptapProps> = ({ onChange, content }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            levels: [2],
          },
        },
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "min-h-[150px] w-full prose-a:text-amber-400 border rounded-md border-slate-400 hover:border-slate-300 transition-colors bg-transparent px-3 py-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
