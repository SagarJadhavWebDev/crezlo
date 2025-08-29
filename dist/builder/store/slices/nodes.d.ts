import { AppStore } from "../";
type NodeMethods = {
    sync: () => void;
    hideOverlay: () => void;
    showOverlay: () => void;
};
type CrezloNodeInstance = {
    id: string;
    methods: NodeMethods;
    element: HTMLElement | null;
};
export type NodesSlice = {
    nodes: Record<string, CrezloNodeInstance | undefined>;
    registerNode: (id: string, node: Partial<CrezloNodeInstance>) => void;
    unregisterNode: (id: string, node?: Partial<CrezloNodeInstance>) => void;
};
export declare const createNodesSlice: (set: (newState: Partial<AppStore>) => void, get: () => AppStore) => NodesSlice;
export {};
