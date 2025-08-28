import { InputHTMLAttributes } from "react";
export type CheckboxOption = {
    label: string;
    value: string;
};
export type CheckboxGroupProps = {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    required?: boolean;
    renderSupportingText?: React.ReactNode;
    options: CheckboxOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;
export declare const CheckboxGroup: import("react").ForwardRefExoticComponent<{
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    required?: boolean;
    renderSupportingText?: React.ReactNode;
    options: CheckboxOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> & import("react").RefAttributes<HTMLInputElement>>;
