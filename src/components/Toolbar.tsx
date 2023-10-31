import React, { FC } from "react";

import { type Editor } from "@tiptap/react";

import { Toggle } from "./ui/toggle";

import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading,
  Quote,
} from "lucide-react";

type ToolbarProps = {
  editor: Editor | null;
};

const Toolbar: FC<ToolbarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="mb-2 w-fit rounded-md border border-slate-400">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        className="hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading className="h-5 w-5" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        className="hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-5 w-5" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        className="hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-5 w-5" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        className="hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-5 w-5" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("blockquote")}
        className="hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote className="h-5 w-5" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        className="hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-5 w-5" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        className="hover:bg-primary hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white"
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-5 w-5" />
      </Toggle>
    </div>
  );
};

export default Toolbar;
