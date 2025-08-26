import { SelectHTMLAttributes } from "react";
export type SelectDropDownProps = SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    required?: boolean;
    renderSupportingText?: React.ReactNode;
    options: {
        value: string;
        label: string;
    }[];
    size?: "sm" | "md" | "lg";
};
export declare const SelectDropDown: import("react").ForwardRefExoticComponent<SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    required?: boolean;
    renderSupportingText?: React.ReactNode;
    options: {
        value: string;
        label: string;
    }[];
    size?: "sm" | "md" | "lg";
} & import("react").RefAttributes<HTMLSelectElement>>;
