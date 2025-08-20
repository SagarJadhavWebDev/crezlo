import React from "react";

const TableSkeleton: React.FC<{ columns: number; rows?: number }> = ({ columns, rows = 5 }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4">
        <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </header>
      <div className="overflow-x-auto">
        <table className="table-auto w-full dark:text-gray-300">
          <thead className="bg-gray-50 dark:bg-gray-900/20 border-t border-b border-gray-100 dark:border-gray-700/60">
            <tr>
              <th className="px-2 first:pl-5 last:pr-5 py-3 w-px">
                <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mx-auto" />
              </th>
              {Array.from({ length: columns }).map((_, idx) => (
                <th key={idx} className="px-2 first:pl-5 last:pr-5 py-3">
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, rowIdx) => (
              <tr key={rowIdx} className="border-t border-gray-100 dark:border-gray-700/60">
                <td className="px-2 first:pl-5 last:pr-5 py-3">
                  <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mx-auto" />
                </td>
                {Array.from({ length: columns }).map((_, colIdx) => (
                  <td key={colIdx} className="px-2 first:pl-5 last:pr-5 py-3">
                    <div className="h-4 w-full max-w-[200px] bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSkeleton;
