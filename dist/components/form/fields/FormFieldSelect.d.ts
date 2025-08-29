import { FieldValues } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { SelectDropDownProps } from "./components/SelectDropDown";
interface FormFieldSelectProps<T extends FieldValues> extends SelectDropDownProps {
    name: NestedKeyOf<T>;
    required?: boolean;
    validation?: FieldValidation<T>;
}
export declare function FormFieldSelect<T extends FieldValues>({ name, required, validation, ...props }: FormFieldSelectProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
