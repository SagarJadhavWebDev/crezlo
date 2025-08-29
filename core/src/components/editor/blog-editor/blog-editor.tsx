"use client";

import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { FloatingLinkContext } from "../context/floating-link-context";
import { SharedAutocompleteContext } from "../context/shared-autocomplete-context";
import { nodes } from "./nodes";
import { Plugins } from "./plugins";
import HtmlPlugin from "../plugins/actions/html-plugin";
import { blogEditorTheme } from "../themes/blog-editor-theme";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $getRoot, EditorState, SerializedEditorState } from "lexical";
import { TooltipProvider } from "../../ui";
import { cn } from "../../../utils";
import { forwardRef, useCallback, useImperativeHandle } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
const editorConfig: InitialConfigType = {
  namespace: "BlogEditor",
  theme: blogEditorTheme,
  nodes,
  onError: (error: Error) => {
    console.error(error);
  },
};

export const BlogEditor = forwardRef<ILexicalCustomFunctions>(
  (
    {
      initialHtml,
      onHtmlChanged,
      onChange,
      onSerializedChange,
      className,
    }: {
      initialHtml?: string;
      onHtmlChanged: (html: string) => void;
      onChange?: (editorState: EditorState) => void;
      onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
      className?: string;
    },
    ref
  ) => {
    return (
      <div className={cn("bg-white dark:bg-gray-900/30 text-gray-800 dark:text-gray-100 overflow-hidden rounded-lg border shadow", className)}>
        <LexicalComposer
          initialConfig={{
            ...editorConfig,
          }}
        >
          <TooltipProvider>
            <SharedAutocompleteContext>
              <FloatingLinkContext>
                <LexicalCustomFunctions ref={ref} />
                <Plugins />
                <HtmlPlugin initialHtml={initialHtml} onHtmlChanged={onHtmlChanged} />
                <OnChangePlugin
                  ignoreSelectionChange={true}
                  onChange={(editorState) => {
                    onChange?.(editorState);
                    onSerializedChange?.(editorState.toJSON());
                  }}
                />
              </FloatingLinkContext>
            </SharedAutocompleteContext>
          </TooltipProvider>
        </LexicalComposer>
      </div>
    );
  }
);

interface ILexicalCustomFunctions {
  clear: () => void;
  editor: any;
} 

const LexicalCustomFunctions = forwardRef<ILexicalCustomFunctions>((props, ref) => {
  const [editor] = useLexicalComposerContext();

  const handleClearEditor = useCallback(() => {
    editor.update(() => {
      const root = $getRoot();
      root.clear();
    });

    editor.focus();
  }, [editor]);

  useImperativeHandle(ref, () => ({
    clear: () => {
      handleClearEditor();
    },
    editor: editor,
  }));
  return null;
});
