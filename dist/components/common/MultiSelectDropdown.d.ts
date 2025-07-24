interface Option {
    lable: string;
    value: string;
}
interface MultiSelectDropdownProps {
    options: Option[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    selectedValues?: string[];
}
export default function MultiSelectDropdown({ options, onChange, placeholder, selectedValues, }: MultiSelectDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
