import { ComponentData, Config, Metadata, ResolveDataTrigger, RootDataWithProps } from "../types";
export declare const cache: {
    lastChange: Record<string, any>;
};
export declare const resolveComponentData: <T extends ComponentData | RootDataWithProps>(item: T, config: Config, metadata?: Metadata, onResolveStart?: (item: T) => void, onResolveEnd?: (item: T) => void, trigger?: ResolveDataTrigger) => Promise<{
    node: any;
    didChange: boolean;
}>;
