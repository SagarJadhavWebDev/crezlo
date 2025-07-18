import { useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  const updateQueryParam = (key: string, value: string) => {
    params.set(key, value);
    router.push(`?${params.toString()}`);
  };
  return { params, updateQueryParam };
};
