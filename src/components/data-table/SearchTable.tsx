import { Input } from "../common";

export default function SearchTable({ placeholder = "Search…" }: { placeholder?: string }) {
  return (
    <Input
      className="max-w-40 bg-white dark:bg-gray-900/30 border focus:ring-0 focus:ring-offset-0 dark:disabled:bg-gray-700/30 dark:disabled:border-gray-700 dark:disabled:hover:border-gray-700 text-sm text-gray-800 dark:text-gray-100 leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-gray-300 dark:border-gray-700/60 dark:hover:border-gray-600 dark:focus:border-gray-600 shadow-sm rounded-lg placeholder-gray-400 dark:placeholder-gray-500"
      placeholder={placeholder}
    />
  );
}
