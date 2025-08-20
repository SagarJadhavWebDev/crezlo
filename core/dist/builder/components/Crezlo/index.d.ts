import { ReactElement, ReactNode } from "react";
import type { UiState, IframeConfig, OnAction, Overrides, Permissions, Plugin, InitialHistory, UserGenerics, Config, Data, Metadata } from "../../types";
import { CrezloAction } from "../../reducer";
import { Viewports } from "../../types";
type CrezloProps<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
    children?: ReactNode;
    config: UserConfig;
    data: Partial<G["UserData"] | Data>;
    ui?: Partial<UiState>;
    onChange?: (data: G["UserData"]) => void;
    onPublish?: (data: G["UserData"]) => void;
    onAction?: OnAction<G["UserData"]>;
    permissions?: Partial<Permissions>;
    plugins?: Plugin[];
    pageOptions?: ReactNode;
    leftSidebarTabs?: {
        key: string;
        title: ReactNode;
        body: ReactNode;
    }[];
    overrides?: Partial<Overrides>;
    renderHeader?: (props: {
        children: ReactNode;
        dispatch: (action: CrezloAction) => void;
        state: G["UserAppState"];
    }) => ReactElement;
    renderHeaderActions?: (props: {
        state: G["UserAppState"];
        dispatch: (action: CrezloAction) => void;
    }) => ReactElement;
    headerTitle?: string;
    headerPath?: string;
    viewports?: Viewports;
    iframe?: IframeConfig;
    dnd?: {
        disableAutoScroll?: boolean;
    };
    initialHistory?: InitialHistory;
    metadata?: Metadata;
    className?: string;
};
export declare const usePropsContext: () => CrezloProps<Config, UserGenerics<Config>>;
export declare function Crezlo<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>>(props: CrezloProps<UserConfig>): import("react/jsx-runtime").JSX.Element;
export declare namespace Crezlo {
    var Components: () => import("react/jsx-runtime").JSX.Element;
    var Fields: import("react").MemoExoticComponent<({ wrapFields }: {
        wrapFields?: boolean;
    }) => import("react/jsx-runtime").JSX.Element>;
    var Outline: () => import("react/jsx-runtime").JSX.Element;
    var Preview: ({ id }: {
        id?: string;
    }) => import("react/jsx-runtime").JSX.Element;
    var Canvas: () => import("react/jsx-runtime").JSX.Element;
}
export {};
