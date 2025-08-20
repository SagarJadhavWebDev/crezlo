import { ReactElement, ReactNode, Ref } from "react";
export declare const DrawerItemInner: ({ children, name, label, preview, dragRef, isDragDisabled, }: {
    children?: (props: {
        children: ReactNode;
        name: string;
    }) => ReactElement;
    name: string;
    label?: string;
    preview?: string;
    dragRef?: Ref<any>;
    isDragDisabled?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Drawer: {
    ({ children, droppableId, direction, }: {
        children: ReactNode;
        droppableId?: string;
        direction?: "vertical" | "horizontal";
    }): import("react/jsx-runtime").JSX.Element;
    Item: ({ name, children, id, label, preview, index, isDragDisabled, }: {
        name: string;
        children?: (props: {
            children: ReactNode;
            name: string;
        }) => ReactElement;
        id?: string;
        label?: string;
        preview?: string;
        index?: number;
        isDragDisabled?: boolean;
    }) => import("react/jsx-runtime").JSX.Element;
};
