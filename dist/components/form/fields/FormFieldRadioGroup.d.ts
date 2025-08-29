import { FieldValues } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { RadioGroupProps } from "./components/RadioGroup";
interface FormFieldRadioGroupProps<T extends FieldValues> extends Omit<RadioGroupProps, "value" | "onChange"> {
    name: NestedKeyOf<T>;
    validation?: FieldValidation<T>;
}
export declare function FormFieldRadioGroup<T extends FieldValues>({ name, validation, ...props }: FormFieldRadioGroupProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
