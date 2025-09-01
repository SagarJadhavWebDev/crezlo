import { TextFormatType } from "lexical";
export declare function FontFormatToolbarPlugin({ format, }: {
    format: Omit<TextFormatType, "highlight" | "subscript" | "superscript">;
}): import("react/jsx-runtime").JSX.Element;
