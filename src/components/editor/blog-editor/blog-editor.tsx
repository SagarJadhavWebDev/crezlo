"use client";

import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { FloatingLinkContext } from "../context/floating-link-context";
import { SharedAutocompleteContext } from "../context/shared-autocomplete-context";
import { nodes } from "./nodes";
import { Plugins } from "./plugins";
import HtmlPlugin from "../plugins/actions/html-plugin";
import { blogEditorTheme } from "../themes/blog-editor-theme";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState, SerializedEditorState } from "lexical";
import { TooltipProvider } from "../../ui";
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
}: {
  initialHtml?: string;
  onHtmlChanged: (html: string) => void;
  onChange?: (editorState: EditorState) => void;
  onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
}) {
  
  return (
    <div className="bg-background overflow-hidden rounded-lg border shadow">
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
        }}
   
      >
        <TooltipProvider>
          <SharedAutocompleteContext>
            <FloatingLinkContext >
              <Plugins  />
              <HtmlPlugin
                initialHtml={initialHtml}
                onHtmlChanged={onHtmlChanged}
              />
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
