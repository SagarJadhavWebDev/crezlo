import { PropsWithChildren, ReactNode } from "react";
import type { Draggable } from "@dnd-kit/dom";
import { StoreApi } from "zustand";
export type PathData = Record<string, {
    path: string[];
    label: string;
}>;
export type DropZoneContext = {
    areaId?: string;
    zoneCompound?: string;
    index?: number;
    registerZone?: (zoneCompound: string) => void;
    unregisterZone?: (zoneCompound: string) => void;
    mode?: "edit" | "render";
    depth: number;
    registerLocalZone?: (zone: string, active: boolean) => void;
    unregisterLocalZone?: (zone: string) => void;
} | null;
export declare const dropZoneContext: import("react").Context<{
    areaId?: string;
    zoneCompound?: string;
    index?: number;
    registerZone?: (zoneCompound: string) => void;
    unregisterZone?: (zoneCompound: string) => void;
    mode?: "edit" | "render";
    depth: number;
    registerLocalZone?: (zone: string, active: boolean) => void;
    unregisterLocalZone?: (zone: string) => void;
}>;
export type Preview = {
    componentType: string;
    index: number;
    zone: string;
    props: Record<string, any>;
    type: "insert" | "move";
} | null;
export type ZoneStore = {
    zoneDepthIndex: Record<string, boolean>;
    areaDepthIndex: Record<string, boolean>;
    nextZoneDepthIndex: Record<string, boolean>;
    nextAreaDepthIndex: Record<string, boolean>;
    enabledIndex: Record<string, boolean>;
    previewIndex: Record<string, Preview>;
    draggedItem?: Draggable | null;
    hoveringComponent: string | null;
};
export declare const ZoneStoreContext: import("react").Context<StoreApi<ZoneStore>>;
export declare const ZoneStoreProvider: ({ children, store, }: PropsWithChildren<{
    store: StoreApi<ZoneStore>;
}>) => import("react/jsx-runtime").JSX.Element;
export declare const DropZoneProvider: ({ children, value, }: {
    children: ReactNode;
    value: DropZoneContext;
}) => import("react/jsx-runtime").JSX.Element;
