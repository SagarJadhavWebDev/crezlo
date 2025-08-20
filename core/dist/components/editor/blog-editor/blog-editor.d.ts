import { EditorState, SerializedEditorState } from "lexical";
export declare function BlogEditor({ initialHtml, onHtmlChanged, onChange, onSerializedChange, }: {
    initialHtml?: string;
    onHtmlChanged: (html: string) => void;
    onChange?: (editorState: EditorState) => void;
    onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
}): import("react/jsx-runtime").JSX.Element;
