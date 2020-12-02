import { IRiskConfig } from '../types';
export declare const ERROR_RISK_FORBIDDEN = "FetcherErrorRiskForbidden";
export declare const ERROR_RISK_INVALID = "FetcherErrorRiskInvalid";
export declare const ERROR_RISK_CANCELLED = "FetcherErrorRiskCancelled";
/**
 * 这里内部使用的二次验证类型，跟数据解耦
 */
export declare enum EVerifyType {
    SMS = "sms",
    EMAIL = "email",
    MFA = "mfa",
    NONE = "NONE",
    UNKNOWN = "UNKNOWN"
}
export declare const DEFAULT_RISK_CONFIG: Required<IRiskConfig>;
