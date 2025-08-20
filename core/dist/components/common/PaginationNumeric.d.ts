import React from "react";
interface PaginationNumericProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
}
export declare const PaginationNumeric: React.FC<PaginationNumericProps>;
export {};
