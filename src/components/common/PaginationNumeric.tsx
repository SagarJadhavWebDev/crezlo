'use client'
import React from "react";

interface PaginationNumericProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export const PaginationNumeric: React.FC<PaginationNumericProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage) onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages: JSX.Element[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          {i === currentPage ? (
            <span
              className="inline-flex  items-center justify-center rounded-lg leading-5 px-3.5 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 text-violet-500"
              aria-current="page"
            >
              {i}
            </span>
          ) : (
            <button
              type="button"
              onClick={() => handlePageClick(i)}
              className="inline-flex items-center  justify-center leading-5 px-3.5 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-300"
            >
              {i}
            </button>
          )}
        </li>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center">
      <nav
        className="flex"
        role="navigation"
        aria-label="Pagination Navigation"
      >
        {/* Previous Button */}
        <div className="mr-2">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`inline-flex items-center justify-center rounded-lg leading-5 px-2.5 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 shadow-sm ${
              currentPage === 1
                ? "text-gray-300 dark:text-gray-600"
                : "text-violet-500 hover:bg-gray-50 dark:hover:bg-gray-900"
            }`}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
            </svg>
          </button>
        </div>

        {/* Page Numbers */}
        <ul className="inline-flex text-sm font-medium  gap-1.5   rounded-lg shadow-sm">
          {renderPageNumbers()}
        </ul>

        {/* Next Button */}
        <div className="ml-2">
          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`inline-flex items-center justify-center rounded-lg leading-5 px-2.5 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 shadow-sm ${
              currentPage === totalPages
                ? "text-gray-300 dark:text-gray-600"
                : "text-violet-500 hover:bg-gray-50 dark:hover:bg-gray-900"
            }`}
          >
            <span className="sr-only">Next</span>
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};
