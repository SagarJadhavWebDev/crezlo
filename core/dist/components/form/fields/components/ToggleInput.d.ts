import { InputHTMLAttributes } from "react";
export type ToggleInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    defaultChecked?: boolean;
    size?: "sm" | "md" | "lg";
    renderSupportingText?: React.ReactNode;
    onCheckChange?: (checked: boolean) => void;
};
export declare const ToggleInput: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    defaultChecked?: boolean;
    size?: "sm" | "md" | "lg";
    renderSupportingText?: React.ReactNode;
    onCheckChange?: (checked: boolean) => void;
} & import("react").RefAttributes<HTMLInputElement>>;
