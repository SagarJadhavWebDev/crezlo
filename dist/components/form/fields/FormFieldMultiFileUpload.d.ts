import { FieldValues } from "react-hook-form";
import { FieldValidation, NestedKeyOf } from "../../../types";
import { MultiFileUploaderProps } from "./components/MultiFileUploader";
interface FormFieldMultiFileUploadProps<T extends FieldValues> extends MultiFileUploaderProps {
    name: NestedKeyOf<T>;
    required?: boolean;
    validation?: FieldValidation<T>;
}
export declare function FormFieldMultiFileUpload<T extends FieldValues>({ name, required, validation, ...props }: FormFieldMultiFileUploadProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
