import _get from 'lodash/get';

import {
  EAccountType
} from '../const';
import {
  IFetcherInterceptorConfig,
  TRiskInfo
} from '../types';

import convertSubAccountVerifyType from './convert-sub-account-verify-type';

export default function convertRiskInfo(responseData: unknown, riskConfig: IFetcherInterceptorConfig): TRiskInfo {
  const verifyUrl = _get(responseData, riskConfig.DATA_PATH_VERIFY_URL!, '') as string;
  const type0: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_TYPE!, '') as string;
  const userPrincipalName = _get(responseData, riskConfig.DATA_PATH_USER_PRINCIPAL_NAME!, '') as string;
  const detail: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_DETAIL!, '') as string;

  // 主账号风控
  if (verifyUrl) {
    return {
      accountType: EAccountType.MAIN,
      verifyUrl
    };
  }

  // 子账号风控
  return {
    accountType: EAccountType.SUB,
    userPrincipalName,
    verifyType: type0,
    type: convertSubAccountVerifyType(type0, riskConfig),
    detail
  };
}