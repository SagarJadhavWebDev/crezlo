"use client";

import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState, SerializedEditorState } from "lexical";

import { FloatingLinkContext } from "../context/floating-link-context";
import { SharedAutocompleteContext } from "../context/shared-autocomplete-context";
import { editorTheme } from "../themes/editor-theme";
import { TooltipProvider } from "../../ui/tooltip";

import { nodes } from "./nodes";
import { Plugins } from "./plugins";
import HtmlPlugin from "../plugins/actions/html-plugin";

const editorConfig: InitialConfigType = {
  namespace: "RichTextEditorX",
  theme: editorTheme,
  nodes,
  onError: (error: Error) => {
    console.error(error);
  },
};

export function RichTextEditorX({
  // editorState,
  // editorSerializedState,
  // onChange,
  // onSerializedChange,
  initialHtml,
  onHtmlChanged,
}: {
  // editorState?: EditorState;
  // editorSerializedState?: SerializedEditorState;
  // onChange?: (editorState: EditorState) => void;
  // onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
  initialHtml?: string;
  onHtmlChanged: (html: string) => void;
}) {
  return (
    <div className="bg-background overflow-hidden rounded-lg border shadow">
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
          // ...(editorState ? { editorState } : {}),
          // ...(editorSerializedState ? { editorState: JSON.stringify(editorSerializedState) } : {}),
        }}
      >
        <TooltipProvider>
          <SharedAutocompleteContext>
            <FloatingLinkContext>
              <Plugins />
              <HtmlPlugin initialHtml={initialHtml} onHtmlChanged={onHtmlChanged} />
              {/* <OnChangePlugin
                ignoreSelectionChange={true}
                onChange={(editorState) => {
                  onChange?.(editorState)
                  onSerializedChange?.(editorState.toJSON())
                }}
              /> */}
            </FloatingLinkContext>
          </SharedAutocompleteContext>
        </TooltipProvider>
      </LexicalComposer>
    </div>
  );
}


// EXAMPE USAGE FOR FULL TEXT EDITOR, CHANGE IN THIS FOLDER PLUGINS TO MAKE OPTIONS ENABLE AND DISABLE

// "use client";

// import { useState } from "react";
// import { SerializedEditorState } from "lexical";
// import { Editor } from "../editor-x/editor";

// export const initialValue = {
//   root: {
//     children: [
//       {
//         children: [
//           {
//             detail: 0,
//             format: 0,
//             mode: "normal",
//             style: "",
//             text: "Hello World 🚀",
//             type: "text",
//             version: 1,
//           },
//         ],
//         direction: "ltr",
//         format: "",
//         indent: 0,
//         type: "paragraph",
//         version: 1,
//       },
//     ],
//     direction: "ltr",
//     format: "",
//     indent: 0,
//     type: "root",
//     version: 1,
//   },
// } as unknown as SerializedEditorState;

// export default function EditorPage() {
//   // const [editorState, setEditorState] = useState<SerializedEditorState>(initialValue);

//   return (
//     <Editor
//       // editorSerializedState={editorState} onSerializedChange={(value) => setEditorState(value)}
//       onHtmlChanged={(html) => {
//         console.log("HTML:", html);
//       }}
//       initialHtml="HELLO MUDASSIR"
//     />
//   );
// }
