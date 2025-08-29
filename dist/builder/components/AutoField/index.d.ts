import { Field, FieldProps } from "../../types";
import { ReactNode } from "react";
export declare const FieldLabel: ({ children, icon, label, el, readOnly, className, }: {
    children?: ReactNode;
    icon?: ReactNode;
    label: string;
    el?: "label" | "div";
    readOnly?: boolean;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
type FieldLabelPropsInternal = {
    children?: ReactNode;
    icon?: ReactNode;
    label?: string;
    el?: "label" | "div";
    readOnly?: boolean;
};
export declare const FieldLabelInternal: ({ children, icon, label, el, readOnly, }: FieldLabelPropsInternal) => import("react/jsx-runtime").JSX.Element;
type FieldPropsInternalOptional<ValueType = any, F = Field<any>> = FieldProps<F, ValueType> & {
    Label?: React.FC<FieldLabelPropsInternal>;
    label?: string;
    labelIcon?: ReactNode;
    name?: string;
};
export type FieldPropsInternal<ValueType = any, F = Field<any>> = FieldProps<F, ValueType> & {
    Label: React.FC<FieldLabelPropsInternal>;
    label?: string;
    labelIcon?: ReactNode;
    id: string;
    name?: string;
};
type FieldNoLabel<Props extends any = any> = Omit<Field<Props>, "label">;
export declare function AutoFieldPrivate<ValueType = any, FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>>(props: FieldPropsInternalOptional<ValueType, FieldType> & {
    Label?: React.FC<FieldLabelPropsInternal>;
}): import("react/jsx-runtime").JSX.Element;
export declare function AutoField<ValueType = any, FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>>(props: FieldProps<FieldType, ValueType>): import("react/jsx-runtime").JSX.Element;
export {};
