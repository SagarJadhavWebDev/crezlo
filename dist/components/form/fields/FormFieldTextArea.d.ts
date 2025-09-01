import { FieldValues } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { TextAreaProps } from "./components/TextArea";
interface FormFieldTextAreaProps<T extends FieldValues> extends TextAreaProps {
    name: NestedKeyOf<T>;
    required?: boolean;
    validation?: FieldValidation<T>;
}
export declare function FormFieldTextArea<T extends FieldValues>({ name, required, validation, ...props }: FormFieldTextAreaProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
