import { CSSProperties } from "react";
import { Config, Data, Metadata, UserGenerics } from "../../types";
type DropZoneRenderProps = {
    zone: string;
    data: Data;
    config: Config;
    areaId?: string;
    style?: CSSProperties;
    metadata?: Metadata;
};
export declare function DropZoneRender({ zone, data, areaId, config, metadata, }: DropZoneRenderProps): import("react/jsx-runtime").JSX.Element;
export declare function Render<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>({ config, data, metadata, }: {
    config: UserConfig;
    data: G["UserData"];
    metadata?: Metadata;
}): import("react/jsx-runtime").JSX.Element;
export {};
