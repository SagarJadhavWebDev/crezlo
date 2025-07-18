import { Config, Data, Metadata, UserGenerics } from "../../types";
import React from "react";
export declare const renderContext: React.Context<{
    config: Config;
    data: Data;
    metadata: Metadata;
}>;
export declare function Render<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>({ config, data, metadata, }: {
    config: UserConfig;
    data: Partial<G["UserData"] | Data>;
    metadata?: Metadata;
}): import("react/jsx-runtime").JSX.Element;
