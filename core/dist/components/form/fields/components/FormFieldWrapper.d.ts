import React from "react";
export type FormFieldWrapperProps = {
    label?: string;
    tooltip?: string;
    required?: boolean;
    error?: string;
    success?: string;
    supportingText?: string;
    renderSupportingText?: React.ReactNode;
    children: React.ReactNode;
};
export declare const FormFieldWrapper: React.FC<FormFieldWrapperProps>;
