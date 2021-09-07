import {
  FetcherError
} from '@alicloud/fetcher';

import {
  ERROR_RISK_CANCELLED,
  ERROR_RISK_INVALID,
  ERROR_RISK_FORBIDDEN
} from '../const';

/**
 * 
 * @param err 请求返回的原始 error
 * @param name 转换成的特定 error name
 * @return 将原始 error 的 name & code 被转换后的新 error
 */
function convertToRiskError(err: FetcherError, name: string): FetcherError {
  err.name = name;
  err.code = name;

  return err;
}

/**
 * 处理 code === FoundRiskAndTip 的情况
 */
export function convertToRiskErrorForbidden(err: FetcherError): FetcherError {
  return convertToRiskError(err, ERROR_RISK_FORBIDDEN);
}

/**
 * 处理无 response.data.verifyType / response.data.verifyType 不合法 / response.data.verifyType 等于 sms 或者 email 时，response.data.verifyDetail 不存在的情况
 */
export function convertToRiskErrorInvalid(err: FetcherError): FetcherError {
  return convertToRiskError(err, ERROR_RISK_INVALID);
}

/**
 * 处理用户取消风控的情况
 */
export function convertToRiskErrorCancelled(err: FetcherError): FetcherError {
  return convertToRiskError(err, ERROR_RISK_CANCELLED);
}