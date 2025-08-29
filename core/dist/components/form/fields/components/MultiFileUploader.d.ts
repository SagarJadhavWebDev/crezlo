import { InputHTMLAttributes } from "react";
export type MultiFileUploaderProps = {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    required?: boolean;
    onUpload?: (file: File, onProgress: (progress: number) => void, id: string) => Promise<void>;
    initialFiles?: {
        id: string;
        name: string;
        size: string;
        type: string;
        lastModified: string;
        url: string;
    }[];
} & InputHTMLAttributes<HTMLInputElement>;
export declare function MultiFileUploader({ label, tooltip, supportingText, error, success, required, onUpload, initialFiles, ...props }: MultiFileUploaderProps): import("react/jsx-runtime").JSX.Element;
