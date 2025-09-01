type EnvConfig = {
  key: string;
  required?: boolean;
  defaultValue?: string;
};

// ----------- Loading ENV -----------
const env = {
  // ---- Domain ---
  NEXT_PUBLIC_APP_DOMAIN: process.env.NEXT_PUBLIC_APP_DOMAIN,

  // ---- App Names ----
  NEXT_PUBLIC_APP_URL_ACCOUNT: process.env.NEXT_PUBLIC_APP_URL_ACCOUNT,
  NEXT_PUBLIC_APP_URL_FINANCE: process.env.NEXT_PUBLIC_APP_URL_FINANCE,
  NEXT_PUBLIC_APP_URL_VR: process.env.NEXT_PUBLIC_APP_URL_VR,
  NEXT_PUBLIC_APP_URL_COMMUNITY: process.env.NEXT_PUBLIC_APP_URL_COMMUNITY,
  NEXT_PUBLIC_APP_URL_WEBSITE: process.env.NEXT_PUBLIC_APP_URL_WEBSITE,
  NEXT_PUBLIC_APP_URL_GENAGENT: process.env.NEXT_PUBLIC_APP_URL_GENAGENT,

  // ---- Api Urls ----
  NEXT_PUBLIC_API_URL_CORE: process.env.NEXT_PUBLIC_API_URL_CORE,
  NEXT_PUBLIC_API_URL_CONTENT: process.env.NEXT_PUBLIC_API_URL_CONTENT,
  NEXT_PUBLIC_API_URL_CHAT: process.env.NEXT_PUBLIC_API_URL_CHAT,
  NEXT_PUBLIC_API_URL_GENAGENT: process.env.NEXT_PUBLIC_API_URL_GENAGENT,
  NEXT_PUBLIC_API_URL_WEBSITE: process.env.NEXT_PUBLIC_API_URL_WEBSITE,
  NEXT_PUBLIC_API_URL_CHANNEL: process.env.NEXT_PUBLIC_API_URL_CHANNEL,
  NEXT_PUBLIC_API_URL_FINANCE: process.env.NEXT_PUBLIC_API_URL_FINANCE,

  // ---- Subscription Type Required for current app ----
  NEXT_PUBLIC_APP_SUBSCRIPTION_TYPE: process.env.NEXT_PUBLIC_APP_SUBSCRIPTION_TYPE,

  // --- R2 Config ---
  NEXT_PUBLIC_R2_ACCOUNT_ID: process.env.NEXT_PUBLIC_R2_ACCOUNT_ID,
  NEXT_PUBLIC_R2_PUBLIC_BUCKET_NAME: process.env.NEXT_PUBLIC_R2_PUBLIC_BUCKET_NAME,
  NEXT_PUBLIC_R2_ACCESS_KEY_ID: process.env.NEXT_PUBLIC_R2_ACCESS_KEY_ID,
  NEXT_PUBLIC_R2_SECRET_ACCESS_KEY: process.env.NEXT_PUBLIC_R2_SECRET_ACCESS_KEY,
  NEXT_PUBLIC_R2_PUBLIC_URL: process.env.NEXT_PUBLIC_R2_PUBLIC_URL,

  // ---- Buyers ----
  // website
  NEXT_PUBLIC_BUYER_WEBSITE_PREVIEW_DEFAULT_DOMAIN: process.env.NEXT_PUBLIC_BUYER_WEBSITE_PREVIEW_DEFAULT_DOMAIN,
  NEXT_PUBLIC_BUYER_WEBSITE_API_DEFAULT_DOMAIN: process.env.NEXT_PUBLIC_BUYER_WEBSITE_API_DEFAULT_DOMAIN,
  // channel
  NEXT_PUBLIC_BUYER_CHANNEL_PREVIEW_DEFAULT_DOMAIN: process.env.NEXT_PUBLIC_BUYER_CHANNEL_PREVIEW_DEFAULT_DOMAIN,
  NEXT_PUBLIC_BUYER_CHANNEL_API_DEFAULT_DOMAIN: process.env.NEXT_PUBLIC_BUYER_CHANNEL_API_DEFAULT_DOMAIN,
};

// --- Constants ---
const isProduction = process.env.NODE_ENV === "production";
const APP_HTTP = isProduction ? "https://" : "http://";

//  --- actual exporting the constant ---
export const envConstants = {
  IS_PRODUCTION: isProduction,
  APP_DOMAIN: isProduction ? env.NEXT_PUBLIC_APP_DOMAIN : "crezlo.local",
  APP_NAME: {
    ACCOUNT: env.NEXT_PUBLIC_APP_URL_ACCOUNT,
    FINANCE: env.NEXT_PUBLIC_APP_URL_FINANCE,
    VR: env.NEXT_PUBLIC_APP_URL_VR,
    COMMUNITY: env.NEXT_PUBLIC_APP_URL_COMMUNITY,
    WEBSITE: env.NEXT_PUBLIC_APP_URL_WEBSITE,
    GENAGENT: env.NEXT_PUBLIC_APP_URL_GENAGENT,
  },
  APP_URL: {
    ACCOUNT: `${APP_HTTP}${env.NEXT_PUBLIC_APP_URL_ACCOUNT}.${env.NEXT_PUBLIC_APP_DOMAIN}`,
    FINANCE: `${APP_HTTP}${env.NEXT_PUBLIC_APP_URL_FINANCE}.${env.NEXT_PUBLIC_APP_DOMAIN}`,
    VR: `${APP_HTTP}${env.NEXT_PUBLIC_APP_URL_VR}.${env.NEXT_PUBLIC_APP_DOMAIN}`,
    COMMUNITY: `${APP_HTTP}${env.NEXT_PUBLIC_APP_URL_COMMUNITY}.${env.NEXT_PUBLIC_APP_DOMAIN}`,
    WEBSITE: `${APP_HTTP}${env.NEXT_PUBLIC_APP_URL_WEBSITE}.${env.NEXT_PUBLIC_APP_DOMAIN}`,
    GENAGENT: `${APP_HTTP}${env.NEXT_PUBLIC_APP_URL_GENAGENT}.${env.NEXT_PUBLIC_APP_DOMAIN}`,
  },
  SUBSCRIPTION_TYPE: env.NEXT_PUBLIC_APP_SUBSCRIPTION_TYPE,
  BASE_API_URL: {
    CORE: env.NEXT_PUBLIC_API_URL_CORE,
    CONTENT: env.NEXT_PUBLIC_API_URL_CONTENT,
    CHAT: env.NEXT_PUBLIC_API_URL_CHAT,
    GENAGENT: env.NEXT_PUBLIC_API_URL_GENAGENT,
    WEBSITE_BUILDER: env.NEXT_PUBLIC_API_URL_WEBSITE,
    CHANNEL_BUILDER: env.NEXT_PUBLIC_API_URL_CHANNEL,
    FINANCE: env.NEXT_PUBLIC_API_URL_FINANCE,
  },
  R2: {
    ACCOUNT_ID: env.NEXT_PUBLIC_R2_ACCOUNT_ID,
    BUCKET: env.NEXT_PUBLIC_R2_PUBLIC_BUCKET_NAME,
    KEY_ID: env.NEXT_PUBLIC_R2_ACCESS_KEY_ID,
    SECRET_KEY: env.NEXT_PUBLIC_R2_SECRET_ACCESS_KEY,
    PUBLIC_URL: env.NEXT_PUBLIC_R2_PUBLIC_URL,
  },
  BUYER: {
    WEBSITE: {
      PREVIEW_DEFAULT_DOMAIN: env.NEXT_PUBLIC_BUYER_WEBSITE_PREVIEW_DEFAULT_DOMAIN, // to preview the current site being build like abc.crezlo.site
      API_DEFAULT_DOMAIN: env.NEXT_PUBLIC_BUYER_WEBSITE_API_DEFAULT_DOMAIN, //to append while getting website like abc.chq.com
    },
    CHANNEL: {
      PREVIEW_DEFAULT_DOMAIN: env.NEXT_PUBLIC_BUYER_CHANNEL_PREVIEW_DEFAULT_DOMAIN, // to preview the current site being build like abc.crezlo.channel
      API_DEFAULT_DOMAIN: env.NEXT_PUBLIC_BUYER_CHANNEL_API_DEFAULT_DOMAIN, //to append while getting website like abc.chq.com
    },
  },
};

// VALIDATING ENV SUCH THAT Missing ENV Variables could handled as this file is loaded in server , hence NEXT_PUBLIC_* variable are not exposed to server
export function validateEnv() {
  const errors: string[] = [];

  for (const key of Object.keys(env)) {
    const value = env?.[key];
    if (!value || value.trim() === "") {
      errors.push(key);
    }
  }

  if (errors.length > 0) {
    throw new Error(`❌ Missing required environment variables:\n${errors.map((e) => ` - ${e}`).join("\n")}`);
  }
}
