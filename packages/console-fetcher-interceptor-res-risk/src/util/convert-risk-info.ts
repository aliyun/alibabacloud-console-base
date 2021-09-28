import _get from 'lodash/get';

import {
  FetcherConfig
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig,
  TRiskInfo
} from '../types';
import {
  ERisk
} from '../const';

import convertVerifyType from './convert-veriy-type';

export default function convertRiskInfo(responseData: unknown, riskConfig: IFetcherInterceptorConfig, fetcherConfig: FetcherConfig): TRiskInfo {
  const type0: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_TYPE!, '') as string;
  const detail: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_DETAIL!, '') as string;
  const codeType: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_CODE_TYPE!, '') as string;
  const consoleVersion = _get(fetcherConfig, riskConfig.CONFIG_PATH_RISK_VERSION!, '') as string;
  const verifyUrl = _get(responseData, riskConfig.DATA_PATH_VERIFY_URL!, '') as string;
  const userPrincipalName = _get(responseData, riskConfig.DATA_PATH_USER_PRINCIPAL_NAME!, '') as string;
  
  if (consoleVersion === '2.0') {
    if (verifyUrl) {
      return {
        risk: ERisk.NEW_MAIN,
        verifyUrl
      };
    }

    return {
      risk: ERisk.NEW_SUB,
      userPrincipalName,
      verifyType: type0,
      type: convertVerifyType(type0, riskConfig),
      detail
    };
  }

  return {
    risk: ERisk.OLD_MAIN,
    verifyType: type0,
    type: convertVerifyType(type0, riskConfig),
    detail,
    codeType
  };
}
