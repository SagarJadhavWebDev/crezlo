import { DropZoneProps } from "../DropZone/types";
import { Config, Content, Metadata } from "../../types";
type SlotRenderProps = DropZoneProps & {
    content: Content;
    config: Config;
    metadata: Metadata;
};
export declare const SlotRenderPure: (props: SlotRenderProps) => import("react/jsx-runtime").JSX.Element;
/**
 * Render a slot.
 *
 * Replacement for DropZoneRender
 */
export declare const SlotRender: import("react").ForwardRefExoticComponent<DropZoneProps & {
    content: Content;
    config: Config;
    metadata: Metadata;
} & import("react").RefAttributes<HTMLDivElement>>;
export {};
