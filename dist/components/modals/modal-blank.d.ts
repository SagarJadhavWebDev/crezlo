import React from "react";
interface ModalBlankProps {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    title?: string;
    className?: string;
}
export declare function ModalBlank({ children, isOpen, setIsOpen, title, className }: ModalBlankProps): import("react/jsx-runtime").JSX.Element;
export {};
