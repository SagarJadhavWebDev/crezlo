import { ReactNode } from "react";
import {PluginMainLayout} from "./PluginMainLayout";
import { cn } from "../../utils";
import { PaginationNumeric } from "../common";
import { IPagination } from "../../types";

interface PluginLayoutProps<T> {
  title: string;
  buttonLabel?: string;
  buttonClick?: () => void;
  loading: boolean;
  data: T[];
  pagination?: IPagination;
  children: (item: T) => ReactNode;
  handlePageChange?: (page: number) => void;
  layoutClasses?: string;
}
export function PluginLayout<T>({
  title,
  buttonClick,
  buttonLabel,
  loading,
  data,
  pagination,
  children,
  handlePageChange,
  layoutClasses,
}: PluginLayoutProps<T>) {
  return (
    <PluginMainLayout
      title={title}
      buttonLabel={buttonLabel}
      buttonClick={buttonClick}
      loading={loading}
    >
      <div
        className={cn(
          "grid  md:grid-cols-2 lg:grid-cols-3 gap-6 ",
          layoutClasses
        )}
      >
        {data && data?.length > 0 ? (
          data?.map(children)
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
            No {title} found
          </div>
        )}
      </div>

      {/* Pagination */}
      {pagination && pagination.total_pages > 1 && (
        <div className="mt-8">
          <PaginationNumeric
            currentPage={pagination.current_page}
            totalPages={pagination.total_pages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </PluginMainLayout>
  );
}
