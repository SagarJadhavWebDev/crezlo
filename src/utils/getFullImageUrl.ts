import { envConstants } from "../constants";

export const getFullImageUrl = (imagePath: string | any): string => {
  const baseUrl = envConstants.R2.PUBLIC_URL as string;
  const fullUrl = imagePath ? `${baseUrl}${imagePath}` : "";
  return fullUrl as string;
};
