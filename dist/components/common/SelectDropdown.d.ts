type SelectOption<T> = {
    label: string;
    value: T;
};
interface SelectDropdownProps<T> {
    options: SelectOption<T>[];
    defaultValue?: T;
    onChange?: (value: T) => void;
    renderOption?: (option: SelectOption<T>, selected: boolean) => React.ReactNode;
    renderButton?: (selected: SelectOption<T>) => React.ReactNode;
}
export declare function SelectDropdown<T>({ options, defaultValue, onChange, renderOption, renderButton }: SelectDropdownProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
