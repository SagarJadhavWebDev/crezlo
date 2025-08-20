import * as React from "react";
import { JSX } from "react";
import { ExcalidrawElement, NonDeleted } from "@excalidraw/excalidraw/types/element/types";
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types";
type ImageType = "svg" | "canvas";
type Dimension = "inherit" | number;
type Props = {
    /**
     * Configures the export setting for SVG/Canvas
     */
    appState: AppState;
    /**
     * The css class applied to image to be rendered
     */
    className?: string;
    /**
     * The Excalidraw elements to be rendered as an image
     */
    elements: NonDeleted<ExcalidrawElement>[];
    /**
     * The Excalidraw files associated with the elements
     */
    files: BinaryFiles;
    /**
     * The height of the image to be rendered
     */
    height?: Dimension;
    /**
     * The ref object to be used to render the image
     */
    imageContainerRef: React.MutableRefObject<HTMLDivElement | null>;
    /**
     * The type of image to be rendered
     */
    imageType?: ImageType;
    /**
     * The css class applied to the root element of this component
     */
    rootClassName?: string | null;
    /**
     * The width of the image to be rendered
     */
    width?: Dimension;
};
/**
 * @explorer-desc
 * A component for rendering Excalidraw elements as a static image
 */
export default function ExcalidrawImage({ elements, files, imageContainerRef, appState, rootClassName, width, height, }: Props): JSX.Element;
export {};
