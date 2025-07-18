import { PropsWithChildren } from "react";
type NestedFieldContext = {
    localName?: string;
    readOnlyFields?: Partial<Record<string | number | symbol, boolean>>;
};
export declare const NestedFieldContext: import("react").Context<NestedFieldContext>;
export declare const useNestedFieldContext: () => {
    readOnlyFields: Partial<Record<string | number | symbol, boolean>>;
    localName?: string;
};
export declare const NestedFieldProvider: ({ children, name, subName, wildcardName, readOnlyFields, }: PropsWithChildren<{
    name: string;
    subName: string;
    wildcardName?: string;
    readOnlyFields: Partial<Record<string | number | symbol, boolean>>;
}>) => import("react/jsx-runtime").JSX.Element;
export {};
