export * from "./auth.type";
export interface IPagination {
    current_page: number;
    total_pages: number;
    per_page: number;
    total_items: number;
}
export type IPaginatedData<T extends string, U> = {
    [K in T]: U[];
} & {
    pagination: IPagination;
};
