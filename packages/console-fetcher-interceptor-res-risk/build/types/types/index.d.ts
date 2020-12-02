import { FetcherFnRequest } from '@alicloud/fetcher';
import { EVerifyType } from '../const';
export interface IRiskInfo {
    type: EVerifyType;
    verifyType: string;
    detail: string;
    codeType: string;
}
export interface IRiskConfig {
    DATA_PATH_VERIFY_TYPE?: string;
    DATA_PATH_VERIFY_DETAIL?: string;
    DATA_PATH_VERIFY_CODE_TYPE?: string;
    CODE_NEED_VERIFY?: string;
    CODE_FORBIDDEN?: string;
    CODE_INVALID_INPUT?: string;
    BY_SMS?: string;
    BY_EMAIL?: string;
    BY_MFA?: string;
    URL_SEND_CODE?: string;
    URL_SETTINGS?: string;
    COOLING_AFTER_SENT?: number;
    COOLING_AFTER_SEND_FAIL?: number;
    METHOD_SEND_CODE?: 'POST' | 'GET';
}
export interface IRiskVerifyDialogData {
    request: FetcherFnRequest;
    riskInfo: IRiskInfo;
    riskConfig: IRiskConfig;
    code: string;
    requestId: string;
    errorMessage: string;
}
