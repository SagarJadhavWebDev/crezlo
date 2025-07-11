import { Dispatch, SetStateAction } from "react";
interface ContextProps {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    sidebarExpanded: boolean;
    setSidebarExpanded: Dispatch<SetStateAction<boolean>>;
}
export declare function AppProvider({ children, }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare const useAppProvider: () => ContextProps;
export {};
