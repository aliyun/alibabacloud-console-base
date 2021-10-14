import _get from 'lodash/get';
import _isUndefined from 'lodash/isUndefined';

import {
  FetcherConfig
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig,
  INewSubRiskValidators,
  TRiskInfo
} from '../types';
import {
  ERisk
} from '../const';

import convertVerifyType from './convert-veriy-type';

export default function convertRiskInfo(responseData: unknown, riskConfig: IFetcherInterceptorConfig, fetcherConfig: FetcherConfig): TRiskInfo {
  // 旧版主账号风控用到的数据
  const oldMainRiskType0: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_TYPE!, '') as string;
  const oldMainRiskDetail: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_DETAIL!, '') as string;
  const oldMainCodeType = _get(responseData, riskConfig.DATA_PATH_VERIFY_CODE_TYPE!, '') as string;
  const codeType = _get(responseData, riskConfig.DATA_PATH_NEW_VERIFY_CODE_TYPE!, '') as string;
  const riskVersion = _get(fetcherConfig, riskConfig.CONFIG_PATH_RISK_VERSION!, '') as string;
  const accountId = _get(responseData, riskConfig.DATA_PATH_USER_ID!, '') as string;
  const verifyUrl = _get(responseData, riskConfig.DATA_PATH_VERIFY_URL!);
  const validators: INewSubRiskValidators[] = _get(responseData, riskConfig.DATA_PATH_VALIDATORS!, []);

  // 新版主/子账号风控
  if (riskVersion === '2.0') {
    if (_isUndefined(verifyUrl)) {
      // 新版子账号风控
      let newSubRiskType0 = '';
      let newSubRiskDetail = '';

      // validators 表示用户可以选择的核身方式，一期只有 mfa，后续会加入 sms 以及 email
      if (validators.length > 0) {
        newSubRiskType0 = validators[0].VerifyType;
        newSubRiskDetail = validators[0].VerifyDetail || '';
      }

      return {
        risk: ERisk.NEW_SUB,
        accountId,
        codeType,
        verifyType: newSubRiskType0,
        type: convertVerifyType(newSubRiskType0, riskConfig),
        detail: newSubRiskDetail
      };
    }

    // 新版主账号风控
    return {
      risk: ERisk.NEW_MAIN,
      verifyUrl
    };
  }

  // 旧版主账号风控
  return {
    risk: ERisk.OLD_MAIN,
    verifyType: oldMainRiskType0,
    type: convertVerifyType(oldMainRiskType0, riskConfig),
    detail: oldMainRiskDetail,
    codeType: oldMainCodeType
  };
}
