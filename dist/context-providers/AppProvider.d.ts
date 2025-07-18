interface ContextProps {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
    sidebarExpanded: boolean;
    setSidebarExpanded: (value: boolean) => void;
}
export declare function AppProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare const useAppProvider: () => ContextProps;
export {};
