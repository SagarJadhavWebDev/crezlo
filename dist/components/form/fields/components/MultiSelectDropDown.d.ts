import { Props } from "react-select";
export type MultiSelectDropDownProps = Partial<Props> & {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    required?: boolean;
    renderSupportingText?: React.ReactNode;
};
export declare const MultiSelectDropDown: import("react").ForwardRefExoticComponent<Partial<Props> & {
    label?: string;
    tooltip?: string;
    supportingText?: string;
    error?: string;
    success?: string;
    required?: boolean;
    renderSupportingText?: React.ReactNode;
} & import("react").RefAttributes<Props>>;
