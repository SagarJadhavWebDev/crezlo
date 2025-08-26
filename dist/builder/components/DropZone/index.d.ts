import { DropZoneProps } from "./types";
import { UniqueIdentifier } from "@dnd-kit/abstract";
export { DropZoneProvider, dropZoneContext } from "./context";
export type DropZoneDndData = {
    areaId?: string;
    depth: number;
    path: UniqueIdentifier[];
    isDroppableTarget: boolean;
};
export declare const DropZoneEditPure: (props: DropZoneProps) => import("react/jsx-runtime").JSX.Element;
export declare const DropZoneEdit: import("react").ForwardRefExoticComponent<DropZoneProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const DropZoneRenderPure: (props: DropZoneProps) => import("react/jsx-runtime").JSX.Element;
export declare const DropZonePure: (props: DropZoneProps) => import("react/jsx-runtime").JSX.Element;
export declare const DropZone: import("react").ForwardRefExoticComponent<DropZoneProps & import("react").RefAttributes<HTMLDivElement>>;
