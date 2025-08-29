import { GoogleFont } from "./google-font.types";
interface FontPickerProps {
    onChange?: (font: GoogleFont["family"]) => void;
    value?: string;
    className?: string;
    showFilters?: boolean;
    width?: number;
    height?: number;
}
export declare function FontPicker({ onChange, value, className, showFilters, width, height }: FontPickerProps): import("react/jsx-runtime").JSX.Element;
export {};
