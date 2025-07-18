import React, { ReactNode } from 'react';
import { SubmitHandler, UseFormProps, UseFormReturn, FieldValues } from 'react-hook-form';
interface FormProps<T extends FieldValues> {
    children: (methods: UseFormReturn<T>) => ReactNode;
    onSubmit: SubmitHandler<T>;
    options?: UseFormProps<T>;
    onWatchChange?: (values: Partial<T>, changedField: keyof T) => void;
}
declare function InnerForm<T extends FieldValues>({ children, onSubmit, options, onWatchChange }: FormProps<T>, ref: React.Ref<UseFormReturn<T> | null>): import("react/jsx-runtime").JSX.Element;
export declare const Form: <T extends FieldValues>(props: FormProps<T> & {
    ref?: React.Ref<UseFormReturn<T>>;
}) => ReturnType<typeof InnerForm>;
export {};
