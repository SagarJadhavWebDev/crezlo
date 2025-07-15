interface SelectedItemsContextProps {
    selectedItems: number[];
    setSelectedItems: (selectedItems: number[]) => void;
}
export declare const SelectedItemsProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useSelectedItems: () => SelectedItemsContextProps;
export {};
