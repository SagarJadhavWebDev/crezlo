import React from "react";
interface PaginationNumericProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
}
declare const PaginationNumeric: React.FC<PaginationNumericProps>;
export default PaginationNumeric;
