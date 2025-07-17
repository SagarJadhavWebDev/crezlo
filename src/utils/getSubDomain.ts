const getSubDomain = () => {
  if (typeof window !== "undefined") {
    const hostname = window?.location?.hostname;
    if (process.env.NODE_ENV === "production" ? hostname?.includes("crezlo.site") : hostname?.includes("localhost")) {
      const domain = hostname?.split(".")?.[0];
      return `${domain}.${process.env.NEXT_PUBLIC_WEBSITE_PREVIEW_DOMAIN_API}`;
    }
    return hostname;
  }
  return null;
};
export default getSubDomain;
