"use client";

import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { FloatingLinkContext } from "../context/floating-link-context";
import { SharedAutocompleteContext } from "../context/shared-autocomplete-context";
import { nodes } from "./nodes";
import { Plugins } from "./plugins";
import HtmlPlugin from "../plugins/actions/html-plugin";
import { blogEditorTheme } from "../themes/blog-editor-theme";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState, SerializedEditorState } from "lexical";
import { TooltipProvider } from "../../ui";
import { cn } from "../../../utils";
const editorConfig: InitialConfigType = {
  namespace: "BlogEditor",
  theme: blogEditorTheme,
  nodes,
  onError: (error: Error) => {
    console.error(error);
  },
};

export function BlogEditor({
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
}) {
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
