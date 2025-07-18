import { RefObject } from "react";
import { DragAxis } from "../../../types";
export declare const useDragAxis: (ref: RefObject<HTMLElement | null>, collisionAxis?: DragAxis) => [DragAxis, () => void];
