import { InputHTMLAttributes } from "react";
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
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
export declare const Input: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
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
} & import("react").RefAttributes<HTMLInputElement>>;
