export interface IShittyFeatureSwitch {
    status: boolean;
    attribute: {
        regions: string[];
        customAttrs: Record<string, string>;
    };
}
export interface IShittyOpenStatus {
    enabled: 'true' | 'false';
    authentication: 'true' | 'false';
    inDebtSoon: 'true' | 'false';
    inDebt: 'true' | 'false';
    inDebtOverdue: 'true' | 'false';
    prohibitedByRiskControl: 'true' | 'false';
    prepaid: 'true' | 'false';
    prepaidExpireSoon: 'true' | 'false';
    prepaidOverdue: 'true' | 'false';
    paused: 'true' | 'false';
    keepProduct: 'true' | 'false';
    site: 'true' | 'false';
    servicizing: 'true' | 'false';
    bizAPI: 'true' | 'false';
    spiTest: 'true' | 'false';
    creditScore: string;
    spotAgreement: string;
    arrearageStatus: string;
    userStopMode: string;
}
export interface IShittyStaticApi<T = unknown> {
    code: string;
    data?: T;
}
export interface IShittyRegion {
    regionId: string;
    name: string;
    physicalList: {
        id: string;
    }[];
    zoneList: {
        zoneId: string;
        name: string;
    }[];
}
export interface IShittyConsoleOneConfig {
    portalType: 'one';
    fEnv?: 'daily' | 'pre';
    CHANNEL: string;
    LANG: string;
    LOCALE: string;
    SEC_TOKEN: string;
    ACCOUNT_TYPE: 'main' | 'sub' | 'sts';
    CURRENT_PK: string;
    MAIN_ACCOUNT_PK: string;
    IS_CERTIFIED: 'true' | 'false';
    REGIONS: IShittyRegion[];
    OPEN_STATUS?: Record<string, IShittyOpenStatus>;
    CHANNEL_LINKS: Record<string, string>;
    CHANNEL_FEATURE_STATUS: Record<string, IShittyFeatureSwitch>;
    FEATURE_STATUS: Record<string, boolean>;
    STATIC_API: Record<string, IShittyStaticApi>;
    RULE_CONFIG: Record<string, string>;
    LABELS: Record<string, unknown[]>;
    USER_PREFERENCE: Record<string, Record<string, string>>;
    NEW_VERSION: 'true' | 'false' | '';
}
export interface IFeatureSwitch extends IShittyFeatureSwitch {
}
export interface IOpenStatus {
    enabled: boolean;
    authentication: boolean;
    inDebtSoon: boolean;
    inDebt: boolean;
    inDebtOverdue: boolean;
    prohibitedByRiskControl: boolean;
    prepaid: boolean;
    prepaidExpireSoon: boolean;
    prepaidOverdue: boolean;
    paused: boolean;
    keepProduct: boolean;
    site: boolean;
    servicizing: boolean;
    bizAPI: boolean;
    spiTest: boolean;
    creditScore: string;
    spotAgreement: string;
    arrearageStatus: string;
    userStopMode: string;
}
export interface IRegion {
    id: string;
    name: string;
    physicalIds: string[];
    zones: {
        id: string;
        name: string;
    }[];
}
export interface IWindow extends Window {
    ALIYUN_CONSOLE_CONFIG?: IShittyConsoleOneConfig;
}
export interface IConsoleOneConfig {
    ONE: boolean;
    ENV: 'prod' | 'pre' | 'daily';
    CHANNEL: string;
    LANG: string;
    LOCALE: string;
    SEC_TOKEN: string;
    ACCOUNT: {
        ID: string;
        ID_MAIN: string;
        TYPE: 'main' | 'sub' | 'sts';
        CERTIFIED: boolean;
    };
    REGIONS: IRegion[];
    OPEN_STATUS?: Record<string, IOpenStatus>;
    LINK: Record<string, string>;
    FEATURE_SWITCH: Record<string, IFeatureSwitch>;
    FEATURE_GRAY: Record<string, boolean>;
    API_RESULT: Record<string, unknown>;
    RULE_CONFIG: Record<string, string>;
    LABELS: Record<string, unknown[]>;
    USER_PREFERENCE: Record<string, Record<string, string>>;
    NEW_VERSION: boolean;
}
