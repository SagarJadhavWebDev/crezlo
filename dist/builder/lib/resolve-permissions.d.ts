import { AppState, Config, Data, ExtractPropsFromConfig, ExtractRootPropsFromConfig, Permissions } from "../types";
export declare const resolvePermissions: <UserConfig extends Config = Config, UserProps extends ExtractPropsFromConfig<UserConfig> = ExtractPropsFromConfig<UserConfig>, UserRootProps extends ExtractRootPropsFromConfig<UserConfig> = ExtractRootPropsFromConfig<UserConfig>, UserData extends Data<UserProps, UserRootProps> | Data = Data<UserProps, UserRootProps>>({ data, lastData, config, changed, lastPermissions, permissions, appState, }: {
    data: UserData["content"][0] | undefined;
    lastData: UserData["content"][0] | null;
    config: UserConfig;
    changed: Record<string, boolean>;
    lastPermissions: Partial<Permissions>;
    permissions: Partial<Permissions>;
    appState: AppState<UserData>;
}) => Partial<Permissions> | Promise<Partial<Permissions>>;
