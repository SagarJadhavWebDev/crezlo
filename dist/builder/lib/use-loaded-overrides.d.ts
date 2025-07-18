import { Overrides, Plugin } from "../types";
export declare const useLoadedOverrides: ({ overrides, plugins, }: {
    overrides?: Partial<Overrides>;
    plugins?: Plugin[];
}) => Partial<{
    fieldTypes: Partial<import("..").FieldRenderFunctions>;
    header: (props: {
        actions: import("react").ReactNode;
        children: import("react").ReactNode;
    }) => import("react").ReactElement;
    actionBar: (props: {
        label?: string;
        children: import("react").ReactNode;
        parentAction: import("react").ReactNode;
    }) => import("react").ReactElement;
    headerActions: (props: {
        children: import("react").ReactNode;
    }) => import("react").ReactElement;
    preview: (props: {
        children: import("react").ReactNode;
    }) => import("react").ReactElement;
    fields: (props: {
        children: import("react").ReactNode;
        isLoading: boolean;
        itemSelector?: import("./data/get-item").ItemSelector | null;
    }) => import("react").ReactElement;
    fieldLabel: (props: {
        children?: import("react").ReactNode;
        icon?: import("react").ReactNode;
        label: string;
        el?: "label" | "div";
        readOnly?: boolean;
        className?: string;
    }) => import("react").ReactElement;
    components: (props: {
        children: import("react").ReactNode;
    }) => import("react").ReactElement;
    componentItem: (props: {
        children: import("react").ReactNode;
        name: string;
    }) => import("react").ReactElement;
    iframe: (props: {
        children: import("react").ReactNode;
        document?: Document;
    }) => import("react").ReactElement;
    outline: (props: {
        children: import("react").ReactNode;
    }) => import("react").ReactElement;
    crezlo: (props: {
        children: import("react").ReactNode;
    }) => import("react").ReactElement;
}>;
