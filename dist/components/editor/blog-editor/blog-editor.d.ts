import { EditorState, SerializedEditorState } from "lexical";
export declare const BlogEditor: import("react").ForwardRefExoticComponent<{
    initialHtml?: string;
    onHtmlChanged: (html: string) => void;
    onChange?: (editorState: EditorState) => void;
    onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
    className?: string;
} & import("react").RefAttributes<unknown>>;
