import { ReactNode, Ref } from "react";
import "./styles.css";
import { DragAxis } from "../../types";
import { UniqueIdentifier } from "@dnd-kit/abstract";
export type ComponentDndData = {
    areaId?: string;
    zone: string;
    index: number;
    componentType: string;
    containsActiveZone: boolean;
    depth: number;
    path: UniqueIdentifier[];
    inDroppableZone: boolean;
};
export declare const DraggableComponent: ({ children, depth, componentType, id, index, zoneCompound, isLoading, isSelected, debug, label, autoDragAxis, userDragAxis, inDroppableZone, }: {
    children: (ref: Ref<any>) => ReactNode;
    componentType: string;
    depth: number;
    id: string;
    index: number;
    zoneCompound: string;
    isSelected?: boolean;
    debug?: string;
    label?: string;
    isLoading: boolean;
    autoDragAxis: DragAxis;
    userDragAxis?: DragAxis;
    inDroppableZone: boolean;
}) => import("react/jsx-runtime").JSX.Element;
