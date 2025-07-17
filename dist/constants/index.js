'use strict';

const APP_HTTP = process.env.NODE_ENV === "production" ? "https://" : "http://";
const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN;
const ACCOUNT = process.env.NEXT_PUBLIC_APP_URL_ACCOUNT || "accounts";
const FINANCE = process.env.NEXT_PUBLIC_APP_URL_FINANCE || "finance";
const VR = process.env.NEXT_PUBLIC_APP_URL_VR || "virtualtour";
const COMMUNITY = process.env.NEXT_PUBLIC_APP_URL_COMMUNITY || "community";
const WEBSITE = process.env.NEXT_PUBLIC_APP_URL_WEBSITE || "website";
const GENAGENT = process.env.NEXT_PUBLIC_APP_URL_GENAGENT || "genagent";
const envConstants = {
    APP_DOMAIN: process.env.NODE_ENV === "production" ? APP_DOMAIN : "crezlo.local",
    APP_NAME: {
        ACCOUNT: ACCOUNT,
        FINANCE: FINANCE,
        VR: VR,
        COMMUNITY: COMMUNITY,
        WEBSITE: WEBSITE,
        GENAGENT: GENAGENT,
    },
    APP_URL: {
        ACCOUNT: `${APP_HTTP}${ACCOUNT}.${APP_DOMAIN}`,
        FINANCE: `${APP_HTTP}${FINANCE}.${APP_DOMAIN}`,
        VR: `${APP_HTTP}${VR}.${APP_DOMAIN}`,
        COMMUNITY: `${APP_HTTP}${COMMUNITY}.${APP_DOMAIN}`,
        WEBSITE: `${APP_HTTP}${WEBSITE}.${APP_DOMAIN}`,
        GENAGENT: `${APP_HTTP}${GENAGENT}.${APP_DOMAIN}`,
    },
    SUBSCRIPTION_TYPE: process.env.NEXT_PUBLIC_SUBSCRIPTION_TYPE,
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

exports.envConstants = envConstants;
//# sourceMappingURL=index.js.map
