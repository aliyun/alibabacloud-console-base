import _get from 'lodash/get';
import _isUndefined from 'lodash/isUndefined';

import {
  FetcherConfig
} from '@alicloud/fetcher';

import {
  INewMainRiskExtend,
  IFetcherInterceptorConfig,
  INewSubRiskValidators,
  TRiskInfo
} from '../types';
import {
  ERisk
} from '../const';

import convertVerifyType from './convert-veriy-type';

export default function convertRiskInfo(responseData: unknown, riskConfig: IFetcherInterceptorConfig, fetcherConfig: FetcherConfig): TRiskInfo {
  // 从 fetcherConfig 中读到的风控版本控制参数
  const riskVersion = _get(fetcherConfig, riskConfig.CONFIG_PATH_RISK_VERSION!, '') as string;
  // 旧版主账号风控参数
  const oldMainRiskType0: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_TYPE!, '') as string; // 旧版主账号风控的 verifyType
  const oldMainRiskDetail: string = _get(responseData, riskConfig.DATA_PATH_VERIFY_DETAIL!, '') as string; // 旧版主账号风控的 verifyDetail
  const oldMainCodeType = _get(responseData, riskConfig.DATA_PATH_VERIFY_CODE_TYPE!, '') as string; // 旧版主账号风控的 verifyCode
  // 新版风控参数
  const newCodeType = _get(responseData, riskConfig.DATA_PATH_NEW_VERIFY_CODE_TYPE!, '') as string; // 新版风控的 verifyCode
  const validators = _get(responseData, riskConfig.DATA_PATH_VALIDATORS!, []) as INewSubRiskValidators[]; // 新版子账号风控的验证方式参数数组
  const accountId = _get(responseData, riskConfig.DATA_PATH_USER_ID!, '') as string; // 新版风控的用户 ID
  const mpkExtend = _get(responseData, riskConfig.DATA_PATH_NEW_EXTEND!, {}) as INewMainRiskExtend; // 新版主账号风控的扩展参数，用于轻量级虚商的场景
  const newMainVerifyType = _get(responseData, riskConfig.DATA_PATH_NEW_VERIFY_TYPE!) as string; // 新版主账号风控的 verifyType
  const newMainVerifyDetail = _get(responseData, riskConfig.DATA_PATH_NEW_VERIFY_DETAIL!) as string; // 新版主账号风控的 verifyDetail
  const verifyUrl = _get(responseData, riskConfig.DATA_PATH_VERIFY_URL!); // 新版主账号风控的 verifyUrl
  // 新版风控中轻量级虚商的判断
  const extendIsMpk = mpkExtend?.isMpk ?? false; // 识别是否是轻量级虚商
  const extendUseOldVersion = mpkExtend?.useOldVersion ?? true; // 识别在虚商场景下，是否降级走老版本链路，调用 /risk/sendVerifyMessage.json 发送验证码
  const mpkUseIdentifyService = extendIsMpk && !extendUseOldVersion;

  if (riskVersion === '2.0') { // 走新版链路的判断标志
    // 轻量级虚商风控
    if (mpkUseIdentifyService) {
      return {
        accountId,
        risk: ERisk.MPK,
        isMpk: extendIsMpk,
        type: convertVerifyType(newMainVerifyType, riskConfig),
        detail: newMainVerifyDetail,
        codeType: newCodeType,
        verifyType: newMainVerifyType,
        useOldSendVerify: extendUseOldVersion
      };
    }

    // 新版子账号风控
    if (_isUndefined(verifyUrl)) {
      let newSubRiskType0 = '';
      let newSubRiskDetail = '';

      // validators 表示用户可以选择的核身方式，一期只有 mfa，后续会加入 sms 以及 email
      if (validators.length > 0) {
        newSubRiskType0 = validators[0].VerifyType;
        newSubRiskDetail = validators[0].VerifyDetail || '';
      }

      return {
        accountId,
        risk: ERisk.NEW_SUB,
        codeType: newCodeType,
        verifyType: newSubRiskType0,
        type: convertVerifyType(newSubRiskType0, riskConfig),
        detail: newSubRiskDetail,
        validators
      };
    }

    // 新版主账号风控
    return {
      accountId,
      verifyUrl,
      risk: ERisk.NEW_MAIN,
      codeType: newCodeType,
      verifyType: newMainVerifyType,
      verifyDetail: newMainVerifyDetail
    };
  }

  // 旧版主账号风控，以及降级到旧版本的轻量级虚商
  return {
    risk: ERisk.OLD_MAIN,
    verifyType: oldMainRiskType0,
    type: convertVerifyType(oldMainRiskType0, riskConfig),
    detail: oldMainRiskDetail,
    codeType: oldMainCodeType
  };
}
