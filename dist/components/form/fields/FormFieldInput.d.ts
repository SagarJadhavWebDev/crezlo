import { FieldValues } from "react-hook-form";
import { InputProps } from "../../common";
import { FieldValidation, NestedKeyOf } from "../../../types/form.type";
interface FormFieldInputProps<T extends FieldValues> extends InputProps {
    name: NestedKeyOf<T>;
    required?: boolean;
    validation?: FieldValidation<T>;
}
export declare function FormFieldInput<T extends FieldValues>({ name, required, validation, ...props }: FormFieldInputProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
