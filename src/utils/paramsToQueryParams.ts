export const paramsToQueryParams = (params: Record<string, string>) => {
  const queryParams = new URLSearchParams();
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      queryParams.set(key, params[key]);
    }
  });
  return queryParams;
};