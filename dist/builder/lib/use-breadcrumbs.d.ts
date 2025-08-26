import { ItemSelector } from "./data/get-item";
export type Breadcrumb = {
    label: string;
    selector: ItemSelector | null;
    zoneCompound?: string;
};
export declare const useBreadcrumbs: (renderCount?: number) => Breadcrumb[];
