import { SelectHTMLAttributes } from 'react';
export declare const Select: import("react").ForwardRefExoticComponent<SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    options: {
        value: string;
        label: string;
    }[];
    error?: string;
    success?: string;
    size?: "sm" | "md" | "lg";
} & import("react").RefAttributes<HTMLSelectElement>>;
