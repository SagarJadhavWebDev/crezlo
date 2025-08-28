import { EditorState, SerializedEditorState } from "lexical";
export declare function BlogEditor({ initialHtml, onHtmlChanged, onChange, onSerializedChange, className, }: {
    initialHtml?: string;
    onHtmlChanged: (html: string) => void;
    onChange?: (editorState: EditorState) => void;
    onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
    className?: string;
}): import("react/jsx-runtime").JSX.Element;
