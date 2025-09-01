import { FieldValues } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { CheckboxGroupProps } from "./components/CheckboxGroup";
interface FormFieldCheckboxGroupProps<T extends FieldValues> extends Omit<CheckboxGroupProps, "value" | "onChange"> {
    name: NestedKeyOf<T>;
    validation?: FieldValidation<T>;
}
export declare function FormFieldCheckboxGroup<T extends FieldValues>({ name, validation, ...props }: FormFieldCheckboxGroupProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
