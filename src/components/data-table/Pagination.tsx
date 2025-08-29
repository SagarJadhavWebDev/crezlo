import React from "react";
import { Button } from "../common";
import { IPagination } from "../../types";

interface PaginationProps {
  pagination: IPagination;
  onPageChange: (page: number) => void;
  onPerPageChange?: (perPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange, onPerPageChange }) => {
  const isFirst = pagination.current_page <= 1;
  const isLast = pagination.current_page >= pagination.total_pages;
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <nav className="mb-4 sm:mb-0 sm:order-1" role="navigation" aria-label="Navigation">
        <ul className="flex justify-center">
          <li className="ml-3 first:ml-0">
            <button
              className={`btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300 ${
                isFirst && "!text-gray-400 dark:!text-gray-600"
              }`}
              disabled={isFirst}
              onClick={() => onPageChange(pagination.current_page - 1)}
            >
              &lt; Previous
            </button>
          </li>
          <li className="ml-3 first:ml-0">
            <button
              className={`btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300 ${
                isLast && "!text-gray-400 dark:!text-gray-600"
              }`}
              disabled={isLast}
              onClick={() => onPageChange(pagination.current_page + 1)}
            >
              Next &gt;
            </button>
          </li>
        </ul>
      </nav>
      {/* {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              page === currentPage
                ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {page}
          </button>
        ))} */}

      {/* {onPerPageChange && (
        <select
          className="border rounded px-2 py-1 text-sm bg-white dark:bg-gray-800 dark:text-white"
          value={perPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
        >
          {[10, 25, 50, 100].map((n) => (
            <option key={n} value={n}>
              {n} per page
            </option>
          ))}
        </select>
      )} */}
      <div className="text-sm text-gray-500 text-center sm:text-left">
        Showing <span className="font-medium text-gray-600 dark:text-gray-300">{(pagination.current_page - 1) * pagination.per_page + 1}</span> to{" "}
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {Math.min(pagination.current_page * pagination.per_page, pagination.total_items)}
        </span>{" "}
        of <span className="font-medium text-gray-600 dark:text-gray-300">{pagination.total_items}</span> results
      </div>
    </div>
  );
};

export default Pagination;
