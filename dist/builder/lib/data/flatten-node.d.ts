import { ComponentData, Config, RootData, UserGenerics } from "../../types";
export declare const flattenNode: <UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>(node: ComponentData | RootData, config: UserConfig) => {
    props: unknown;
    type: string;
    readOnly?: Partial<Record<string | number, boolean>>;
} | {
    props: unknown;
    readOnly?: Partial<Record<keyof import("../..").DefaultRootFieldProps, boolean>>;
    title?: string;
};
export declare const expandNode: (node: ComponentData | RootData) => {
    props: unknown;
    type: string;
    readOnly?: Partial<Record<string | number, boolean>>;
} | {
    props: unknown;
    readOnly?: Partial<Record<keyof import("../..").DefaultRootFieldProps, boolean>>;
    title?: string;
};
