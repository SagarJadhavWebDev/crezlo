import { FieldValues } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { BlogFormEditorProps } from "./components/BlogFormEditor";
interface FormFieldBlogEditorProps<T extends FieldValues> extends Omit<BlogFormEditorProps, "onChange"> {
    name: NestedKeyOf<T>;
    validation?: FieldValidation<T>;
}
export declare function FormFieldBlogEditor<T extends FieldValues>({ name, validation, ...props }: FormFieldBlogEditorProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
