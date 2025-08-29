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
export interface IFormatedDate {
    date: string;
    time: string;
    datetime: string;
    human: string;
    formatted: string;
    tz: string;
}
export interface ICollectionBaseFields {
    id?: string;
    created_at?: IFormatedDate;
    updated_at?: IFormatedDate;
    created_by?: ICreatedBy;
    updated_by?: ICreatedBy;
    collection_id?: string;
    status?: "enabled" | "disabled";
}
export interface IFileData {
    image_path: string;
    storage: string;
    mediamanager_used: boolean;
    url: string;
    name: string;
    type: string;
}
export interface ICollection extends ICollectionBaseFields {
    title: string;
    template: string;
    children: ICollection[];
    sub_template: string;
    parent_id: string;
    layout?: string;
}
export interface ICollectionFields {
    id: string;
    name: string;
    user_data_type: FieldType;
    system_data_type: string;
    shot_code: string;
    required: boolean;
    is_hidden: boolean;
    is_read_only: boolean;
    settings_meta: SettingsMeta;
    order: number;
    status: string;
    created_at: string;
    updated_at: string;
}
export interface SettingsMeta {
    options: Options;
}
export interface Options {
    placeholder?: string;
    description: string;
    default: any;
    relation_table?: string;
    allowed_values?: string[];
    max_length?: number;
    type?: string;
    is_multiple?: boolean;
    options: DropDownOption[];
    dependable_fields: string[] | Record<string, string[]>;
    fields: ICollectionFields[];
}
export interface DropDownOption {
    label: string;
    value: string;
}
export type FieldType = "input" | "textarea" | "text" | "dropdown" | "radio" | "checkbox" | "input_number" | "input_image" | "input_file" | "input_time" | "input_date" | "button" | "one_to_one" | "one_to_many" | "editor" | "toggle" | "status" | "multi_record";
export interface ICreatedBy {
    id: string;
    name: string;
    avatar: null;
}
