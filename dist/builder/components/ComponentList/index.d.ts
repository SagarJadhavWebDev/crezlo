import { ReactNode } from "react";
declare const ComponentList: {
    ({ children, title, id, }: {
        id: string;
        children?: ReactNode;
        title?: string;
    }): import("react/jsx-runtime").JSX.Element;
    Item: ({ name, label, preview, }: {
        name: string;
        label?: string;
        preview?: string;
        index?: number;
    }) => import("react/jsx-runtime").JSX.Element;
};
export { ComponentList };
