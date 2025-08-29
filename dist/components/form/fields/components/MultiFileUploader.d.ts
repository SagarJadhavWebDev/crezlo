import { InputHTMLAttributes } from "react";
export type MultiFileUploaderProps = {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    required?: boolean;
    onUpload?: (file: File, onProgress: (progress: number) => void) => Promise<void>;
} & InputHTMLAttributes<HTMLInputElement>;
export declare function MultiFileUploader({ label, tooltip, supportingText, error, success, required, onUpload, ...props }: MultiFileUploaderProps): import("react/jsx-runtime").JSX.Element;
