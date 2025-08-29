import { InputHTMLAttributes } from "react";
import { FormFieldWrapperProps } from "./FormFieldWrapper";
export type BlogFormEditorProps = {
    value?: string;
    onChange: (value: string) => void;
    editorClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & Omit<FormFieldWrapperProps, "children">;
export declare const BlogFormEditor: import("react").ForwardRefExoticComponent<{
    value?: string;
    onChange: (value: string) => void;
    editorClassName?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> & Omit<FormFieldWrapperProps, "children"> & import("react").RefAttributes<HTMLInputElement>>;
