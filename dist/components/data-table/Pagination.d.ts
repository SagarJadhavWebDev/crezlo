import React from "react";
import { IPagination } from "../../types";
interface PaginationProps {
    pagination: IPagination;
    onPageChange: (page: number) => void;
    onPerPageChange?: (perPage: number) => void;
}
export declare const Pagination: React.FC<PaginationProps>;
export {};
