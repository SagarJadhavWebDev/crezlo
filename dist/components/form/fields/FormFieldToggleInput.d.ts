import { FieldValues } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { ToggleInputProps } from "./components/ToggleInput";
interface FormFieldToggleInputProps<T extends FieldValues> extends ToggleInputProps {
    name: NestedKeyOf<T>;
    required?: boolean;
    validation?: FieldValidation<T>;
}
export declare function FormFieldToggleInput<T extends FieldValues>({ name, required, validation, ...props }: FormFieldToggleInputProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
