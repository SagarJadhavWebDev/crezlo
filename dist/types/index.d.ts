export * from "./auth.type";
export * from "./form.type";
export interface IApiResponse<T> {
    message: string;
    data: T | undefined;
    status_code: number;
    error: boolean;
}
export interface IPagination {
    current_page: number;
    total_pages: number;
    per_page: number;
    total_items: number;
}
export interface PaginationLinks {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}
export interface PaginationMetaLink {
    url: string | null;
    label: string;
    active: boolean;
}
export interface PaginationMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: PaginationMetaLink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}
export type IPaginatedData<T extends string, U> = {
    [K in T]: U[];
} & {
    pagination: IPagination;
    links: PaginationLinks;
    meta: PaginationMeta;
};
export interface ICreatedBy {
    id: string;
    name: string;
    avatar: null;
}
export interface IFileData {
    image_path?: string;
    storage?: "backblaze";
    mediamanager_used?: boolean;
    url?: string;
}
