const getSSRSubDomain = async () => {
  if (typeof window !== "undefined") {
    throw new Error("getSSRSubDomain can only be used server-side");
  }
  const { headers } = require("next/headers"); // dynamic import for safety
  const headersList = headers();
  const hostname = (await headersList).get("host") || ""; // e.g., 68073386e6f27.crezlo.site
  if (process.env.NODE_ENV === "production" ? hostname?.includes("crezlo.site") : hostname?.includes("localhost")) {
    const domain = hostname?.split(".")?.[0];
    return `${domain}.${process.env.NEXT_PUBLIC_WEBSITE_PREVIEW_DOMAIN_API}`;
  }
  return hostname;
};

export default getSSRSubDomain;
