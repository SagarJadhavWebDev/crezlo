import { ReactNode } from "react";
import { H2, Button, Checkbox } from "../common";
import { SearchTable } from "./SearchTable";
import { Pagination } from "./Pagination";
import { useTable } from "./TableProvider";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "../ui";
import { ArrowLeft } from "lucide-react";
import { IPaginatedData } from "../../types";

export interface ColumnDef<T> {
  id: string;
  header: string | ReactNode;
  sortable?: boolean;
}

export type FilterCondition = "contains" | "equals" | "startsWith" | "endsWith" | "greaterThan" | "lessThan";

interface DataTableProps<K extends string, T> {
  title: string;
  columns: ColumnDef<T>[];
  data: IPaginatedData<K, T>;
  resourceKey: K;
  renderRow: (row: T) => ReactNode;
  isError?: boolean;
  isLoading?: boolean;
  renderTopRightActions?: ReactNode;
  renderSearch?: boolean;
  onCreate?: () => void;
  renderGroupingFilter?: ReactNode;
  onBackClick?: () => void;
  backLabel?: string;
  createButtonLabel?: string;
}
export function DataTable<K extends string, T extends { id: string | number }>({
  title,
  columns,
  data,
  renderRow,
  resourceKey,
  isLoading,
  isError,
  renderTopRightActions = <></>,
  renderSearch,
  onCreate,
  renderGroupingFilter = <></>,
  onBackClick,
  backLabel,
  createButtonLabel,
}: DataTableProps<K, T>) {
  const pagination = data.pagination || {
    current_page: 0,
    per_page: 0,
    total_items: 0,
    total_pages: 0,
  };
  const dataSet = (data[resourceKey] as T[]) || [];
  const { selectAll, deselectAll, state, updateState } = useTable();

  return (
    <TooltipProvider>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
        <div className="sm:flex sm:justify-between sm:items-center mb-5">
          <div className="mb-4 sm:mb-0 flex gap-2">
            {onBackClick ? (
              <Tooltip>
                <TooltipTrigger>
                  <Button onClick={onBackClick} variant="primary" title={backLabel}>
                    <ArrowLeft focusable="false" />
                  </Button>
                  <TooltipContent side="bottom">{backLabel}</TooltipContent>
                </TooltipTrigger>
              </Tooltip>
            ) : (
              <></>
            )}{" "}
            <H2 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold capitalize">{title}</H2>
          </div>

          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {renderSearch && <SearchTable placeholder={`Search by ${title} ID…`} />}
            {onCreate && <Button onClick={onCreate}>{createButtonLabel ?? title}</Button>}
          </div>
        </div>

        <div className="sm:flex sm:justify-between sm:items-center mb-5">
          <div className="mb-4 sm:mb-0">
            {/* <ul className="flex flex-wrap -m-1">
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-800 transition">
                All <span className="ml-1 text-gray-400 dark:text-gray-500">67</span>
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">
                Paid <span className="ml-1 text-gray-400 dark:text-gray-500">14</span>
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">
                Due <span className="ml-1 text-gray-400 dark:text-gray-500">34</span>
              </button>
            </li>
            <li className="m-1">
              <button className="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 transition">
                Overdue <span className="ml-1 text-gray-400 dark:text-gray-500">19</span>
              </button>
            </li>
          </ul> */}
          </div>

          {/* Right side */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* Delete button */}
            {/* <DeleteButton /> */}
            {/* Dropdown */}
            {/* <DateSelect /> */}
            {/* Filter button */}
            {/* <FilterButton align="right" /> */}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl relative">
          <header className="sm:flex sm:justify-between sm:items-center px-5 py-4">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">
              {title} <span className="text-gray-400 dark:text-gray-500 font-medium">{pagination.total_items ?? 0}</span>
            </h2>
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">{renderTopRightActions}</div>
          </header>
          <div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-gray-300">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-t border-b border-gray-100 dark:border-gray-700/60">
                  <tr>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="flex items-center">
                        <label className="inline-flex">
                          <span className="sr-only">Select all</span>
                          <input
                            className="form-checkbox"
                            type="checkbox"
                            onChange={(e) => {
                              e.target.checked ? selectAll(dataSet.map((v) => v.id)) : deselectAll();
                            }}
                          />
                        </label>
                      </div>
                    </th>
                    {columns.map((th) => (
                      <th
                        key={th.id + th.header}
                        scope="col"
                        className={`px-2 first:pl-5 last:pr-5 py-3 text-left text-xs font-medium tracking-wider ${
                          th.sortable ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" : ""
                        }`}
                        onClick={() => {
                          if (th.sortable) {
                            const newDirection = state.sort_by === th.id ? (state.sort_dir === "asc" ? "desc" : "asc") : "asc";
                            updateState({
                              sort_by: th.id,
                              sort_dir: newDirection,
                              current_page: 0,
                            });
                          }
                        }}
                      >
                        <div className="flex items-center justify-start">
                          {th.header}
                          {th.sortable && (
                            <span className="ml-1">
                              {state.sort_by === th.id ? state.sort_dir === "asc" ? "↑" : "↓" : <span className="text-gray-400">↕</span>}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
                  {isLoading ? (
                    Array.from({ length: 20 }).map((_, rowIdx) => (
                      <tr key={rowIdx} className="border-t border-gray-100 dark:border-gray-700/60">
                        <td className="px-2 first:pl-5 last:pr-5 py-3">
                          <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mx-auto" />
                        </td>
                        {Array.from({ length: columns.length }).map((_, colIdx) => (
                          <td key={colIdx} className="px-2 first:pl-5 last:pr-5 py-3">
                            <div className="h-4 w-full max-w-[200px] bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : isError ? (
                    <tr>
                      <td colSpan={columns.length + 1} className="text-center py-10 text-red-500 dark:text-red-400">
                        Error loading data.
                      </td>
                    </tr>
                  ) : dataSet.length === 0 ? (
                    <tr>
                      <td colSpan={columns.length + 1} className="text-center py-10 text-gray-500 dark:text-gray-400">
                        No results found.
                      </td>
                    </tr>
                  ) : (
                    dataSet.map(renderRow)
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8">
          <Pagination
            pagination={pagination}
            onPageChange={(p) => {
              updateState({ current_page: p });
            }}
            key={"page"}
          />
        </div>
      </div>
    </TooltipProvider>
  );
}
