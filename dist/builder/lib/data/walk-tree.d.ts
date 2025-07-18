import { ComponentData, Config, Content, RootData, UserGenerics } from "../../types";
type WalkTreeOptions = {
    parentId: string;
    propName: string;
};
export declare function walkTree<T extends ComponentData | RootData | G["UserData"], UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>(data: T, config: UserConfig, callbackFn: (data: Content, options: WalkTreeOptions) => Content | null | void): T;
export {};
