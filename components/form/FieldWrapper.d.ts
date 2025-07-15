import { ReactNode } from 'react';
interface FieldWrapperProps {
    label?: string;
    error?: string;
    children: ReactNode;
}
export declare function FieldWrapper({ label, error, children }: FieldWrapperProps): import("react/jsx-runtime").JSX.Element;
export {};
