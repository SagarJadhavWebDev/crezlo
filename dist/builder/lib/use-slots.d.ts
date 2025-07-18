import { ReactNode } from "react";
import { ComponentData, Config, Content, RootData } from "../types";
import { DropZoneProps } from "../components/DropZone/types";
export declare function useSlots<T extends ComponentData | RootData>(config: Config, item: T, renderSlotEdit: (dzProps: DropZoneProps & {
    content: Content;
}) => ReactNode, renderSlotRender?: (dzProps: DropZoneProps & {
    content: Content;
}) => ReactNode, readOnly?: T["readOnly"], forceReadOnly?: boolean): T["props"];
