import { TextareaHTMLAttributes } from "react";
export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    prefix?: string | React.ReactNode;
    suffix?: string | React.ReactNode;
    icon?: React.ReactNode;
    isSearch?: boolean;
    inputSize?: "sm" | "md" | "lg";
    renderSupportingText?: React.ReactNode;
};
export declare const TextArea: import("react").ForwardRefExoticComponent<TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    prefix?: string | React.ReactNode;
    suffix?: string | React.ReactNode;
    icon?: React.ReactNode;
    isSearch?: boolean;
    inputSize?: "sm" | "md" | "lg";
    renderSupportingText?: React.ReactNode;
} & import("react").RefAttributes<HTMLTextAreaElement>>;
