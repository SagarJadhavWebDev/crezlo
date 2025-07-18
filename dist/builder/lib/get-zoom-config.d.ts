import { AppState } from "../types";
export declare const getZoomConfig: (uiViewport: AppState["ui"]["viewports"]["current"], frame: HTMLElement, zoom: number) => {
    autoZoom: number;
    rootHeight: number;
    zoom: number;
};
