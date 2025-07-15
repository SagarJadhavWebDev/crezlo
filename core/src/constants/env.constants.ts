export const envConstants = {
  APP_DOMAIN: process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_APP_DOMAIN : "crezlo.local",
  BASE_API_URL: {
    CORE: process.env.NEXT_PUBLIC_API_URL_CORE,
    CONTENT: process.env.NEXT_PUBLIC_API_URL_CONTENT,
    CHAT: process.env.NEXT_PUBLIC_API_URL_CHAT,
    GENAGENT: process.env.NEXT_PUBLIC_API_GENAGENT_URL,
    WEBSITE_BUILDER: process.env.NEXT_PUBLIC_WEBSITE_BUILDER_URL,
    CHANNEL_BUILDER: process.env.NEXT_PUBLIC_CHANNEL_BUILDERL_URL,
    FINANCE: process.env.NEXT_PUBLIC_FINANCE_URL,
  },
};
