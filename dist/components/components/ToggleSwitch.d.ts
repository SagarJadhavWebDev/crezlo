type ToggleSwitchProps = {
    label?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    size?: 'sm' | 'md' | 'lg';
};
export declare const ToggleSwitch: ({ label, defaultChecked, disabled, onChange, size, }: ToggleSwitchProps) => import("react/jsx-runtime").JSX.Element;
export {};
