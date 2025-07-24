import { ComponentData, Config, UserGenerics } from "../../types";
import { PrivateAppState } from "../../types/Internal";
export declare const flattenData: <UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>(state: PrivateAppState, config: UserConfig) => ComponentData[];
