import { ReactNode, SyntheticEvent } from "react";
export declare const ActionBar: {
    ({ label, children, }: {
        label?: string;
        children?: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    Action: ({ children, label, onClick, }: {
        children: ReactNode;
        label?: string;
        onClick: (e: SyntheticEvent) => void;
    }) => import("react/jsx-runtime").JSX.Element;
    Label: ({ label }: {
        label: string;
    }) => import("react/jsx-runtime").JSX.Element;
    Group: ({ children }: {
        children: ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
};
export declare const Action: ({ children, label, onClick, }: {
    children: ReactNode;
    label?: string;
    onClick: (e: SyntheticEvent) => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Group: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Label: ({ label }: {
    label: string;
}) => import("react/jsx-runtime").JSX.Element;
