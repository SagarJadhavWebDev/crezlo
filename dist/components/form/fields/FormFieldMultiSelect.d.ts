import { FieldValues } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types/form.type";
import { MultiSelectDropDownProps } from "./components/MultiSelectDropDown";
interface FormFieldMultiSelectProps<T extends FieldValues> extends Partial<MultiSelectDropDownProps> {
    name: NestedKeyOf<T>;
    validation?: FieldValidation<T>;
    type?: "status";
}
export declare function FormFieldMultiSelect<T extends FieldValues>({ name, validation, type, ...props }: FormFieldMultiSelectProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
