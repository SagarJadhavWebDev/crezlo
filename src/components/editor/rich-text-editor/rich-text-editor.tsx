"use client";

import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { FloatingLinkContext } from "../context/floating-link-context";
import { SharedAutocompleteContext } from "../context/shared-autocomplete-context";
import { richTextEditorTheme } from "../themes/rich-text-editor-theme";
import { TooltipProvider } from "../../ui/tooltip";

import { nodes } from "./nodes";
import { Plugins } from "./plugins";
import HtmlPlugin from "../plugins/actions/html-plugin";
import { useEffect, useState } from "react";

const editorConfig: InitialConfigType = {
  namespace: "RichTextEditor",
  theme: richTextEditorTheme,
  nodes,
  onError: (error: Error) => {
    console.error(error);
  },
};

export function RichTextEditor({
  initialHtml,
  onHtmlChanged,
  onClose,
}: {
  initialHtml?: string;
  onHtmlChanged: (html: string) => void;
  onClose?: () => void;
}) {
  const [value, setValue] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleSave = () => {
    if (!onHtmlChanged || !hasUnsavedChanges) return;
    try {
      setIsSaving(true);
      onHtmlChanged(value);
      setLastSaved(new Date());
      setHasUnsavedChanges(false);
      console.log("HTML CHANGED:", value);
    } catch (error) {
      console.error("Save failed:", error);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    if (initialHtml) {
      setValue(initialHtml);
    }
  }, []);

  const SaveStatus = () => {
    if (isSaving) {
      return <span className="text-blue-600 text-xs">Saving...</span>;
    }
    if (hasUnsavedChanges) {
      return <span className="text-orange-600 text-xs">Unsaved changes</span>;
    }
    if (lastSaved) {
      return <span className="text-green-600 text-xs">Saved at {lastSaved.toLocaleTimeString()}</span>;
    }
    return <></>;
  };

  return (
    <div className="bg-background overflow-hidden rounded-lg border shadow">
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
        }}
      >
        <TooltipProvider>
          <SharedAutocompleteContext>
            <FloatingLinkContext>
              <Plugins />
              <HtmlPlugin
                initialHtml={initialHtml}
                onHtmlChanged={(html) => {
                  setHasUnsavedChanges(true);
                  setValue(html);
                }}
              />
            </FloatingLinkContext>
          </SharedAutocompleteContext>
        </TooltipProvider>
      </LexicalComposer>
      <div className="flex justify-between items-center p-2 gap-2">
        <div className="flex-1">
          <SaveStatus />
        </div>
        <div
          className="btn btn-secondary"
          onClick={() => {
            onClose?.();
          }}
        >
          Close
        </div>
        <div
          className="btn btn-primary"
          onClick={() => {
            handleSave();
          }}
        >
          Apply
        </div>
      </div>
    </div>
  );
}
