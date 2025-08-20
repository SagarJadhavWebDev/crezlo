import { InputHTMLAttributes } from "react";
export type RadioOption = {
    label: string;
    value: string;
};
export type RadioGroupProps = {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    required?: boolean;
    renderSupportingText?: React.ReactNode;
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;
export declare const RadioGroup: import("react").ForwardRefExoticComponent<{
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    required?: boolean;
    renderSupportingText?: React.ReactNode;
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & import("react").RefAttributes<HTMLInputElement>>;
