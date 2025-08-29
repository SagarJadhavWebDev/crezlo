import { InputProps } from "./Input";
type InlineEditableInputProps = Omit<InputProps, "value" | "onChange"> & {
    value: string;
    onChange: (val: string) => void;
    onSave: (val: string) => void;
    onCancel?: () => void;
    debounceMs?: number;
    renderDisplayValue?: (val: string) => React.ReactNode;
    isInputValid?: boolean;
    textClasesName?: string;
};
export declare const InlineEditableInput: ({ value, onChange, debounceMs, renderDisplayValue, className, onSave, onCancel, isInputValid, textClasesName, ...inputProps }: InlineEditableInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
