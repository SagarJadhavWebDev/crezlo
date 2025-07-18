import { ReactNode } from "react";
import { Config } from "./Config";
import { CrezloContext } from "./Props";
import { ComponentData, Data } from "./Data";
import { PrivateAppState } from "./Internal";
export type WithId<Props> = Props & {
    id: string;
};
export type WithCrezloProps<Props> = Props & {
    crezlo: CrezloContext;
    editMode?: boolean;
};
export type AsFieldProps<Props> = Omit<Props, "children" | "crezlo" | "editMode">;
export type WithChildren<Props> = Props & {
    children: ReactNode;
};
export type ExtractPropsFromConfig<UserConfig> = UserConfig extends Config<infer P, any, any> ? P : never;
export type ExtractRootPropsFromConfig<UserConfig> = UserConfig extends Config<any, infer P, any> ? P : never;
export type UserGenerics<UserConfig extends Config = Config, UserProps extends ExtractPropsFromConfig<UserConfig> = ExtractPropsFromConfig<UserConfig>, UserRootProps extends ExtractRootPropsFromConfig<UserConfig> = ExtractRootPropsFromConfig<UserConfig>, UserData extends Data<UserProps, UserRootProps> | Data = Data<UserProps, UserRootProps>, UserAppState extends PrivateAppState<UserData> = PrivateAppState<UserData>, UserComponentData extends ComponentData = UserData["content"][0]> = {
    UserConfig: UserConfig;
    UserProps: UserProps;
    UserRootProps: UserRootProps;
    UserData: UserData;
    UserAppState: UserAppState;
    UserComponentData: UserComponentData;
};
