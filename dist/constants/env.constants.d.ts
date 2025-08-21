export declare const envConstants: {
    IS_PRODUCTION: boolean;
    APP_DOMAIN: string;
    APP_NAME: {
        ACCOUNT: string;
        FINANCE: string;
        VR: string;
        COMMUNITY: string;
        WEBSITE: string;
        GENAGENT: string;
    };
    APP_URL: {
        ACCOUNT: string;
        FINANCE: string;
        VR: string;
        COMMUNITY: string;
        WEBSITE: string;
        GENAGENT: string;
    };
    SUBSCRIPTION_TYPE: string;
    BASE_API_URL: {
        CORE: string;
        CONTENT: string;
        CHAT: string;
        GENAGENT: string;
        WEBSITE_BUILDER: string;
        CHANNEL_BUILDER: string;
        FINANCE: string;
    };
    R2: {
        ACCOUNT_ID: string;
        BUCKET: string;
        KEY_ID: string;
        SECRET_KEY: string;
        PUBLIC_URL: string;
    };
    BUYER: {
        WEBSITE: {
            PREVIEW_DEFAULT_DOMAIN: string;
            API_DEFAULT_DOMAIN: string;
        };
    };
};
export declare function validateEnv(): void;
