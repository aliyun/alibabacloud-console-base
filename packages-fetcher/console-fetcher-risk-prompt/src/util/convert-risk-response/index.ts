import {
  ERiskType,
  EConvertedVerifyType
} from '../../enum';
import {
  TNewRisk,
  TRiskInfo,
  IRiskConfig,
  TRiskResponse,
  ICommonRiskInfo,
  TRiskTypeConfig,
  TRiskParametersGetter
} from '../../types';
import {
  DEFAULT_EXTRA_RISK_CONFIG
} from '../../const';

import convertVerifyType from './convert-verify-type';
import convertMpkSetting from './convert-mpk-setting';
import getRiskParameters from './get-risk-parameters';
import getMergedUseNewRisk from './get-merged-use-new-risk';
import getRiskValueViaConfig from './get-risk-value-via-config';

interface IConvertRiskResponseProps<T> {
  newRisk?: TNewRisk<T>;
  riskConfig?: IRiskConfig;
  riskResponse: TRiskResponse<T>;
  riskParametersGetter?: TRiskParametersGetter<T>;
}

function convertRiskResponse<T>({
  newRisk,
  riskConfig,
  riskResponse,
  riskParametersGetter // 支持调用方传入 getter 函数来从 riskResponse 取出 riskPrompt 所需的新版风控函数
}: IConvertRiskResponseProps<T>): TRiskInfo {
  const riskTypeConfig: TRiskTypeConfig = {
    BY_SMS: riskConfig?.BY_SMS ?? DEFAULT_EXTRA_RISK_CONFIG.BY_SMS,
    BY_EMAIL: riskConfig?.BY_EMAIL ?? DEFAULT_EXTRA_RISK_CONFIG.BY_EMAIL,
    BY_MFA: riskConfig?.BY_MFA ?? DEFAULT_EXTRA_RISK_CONFIG.BY_MFA
  };

  const riskParameters = getRiskParameters({
    riskConfig,
    riskResponse,
    riskParametersGetter
  });
  const {
    accountId, verifyUrl, codeType,
    validators = [], verifyType = '', verifyDetail = ''
  } = riskParameters;
  const convertedVerifyType = convertVerifyType({
    type0: verifyType,
    riskTypeConfig
  });

  const mergedUseNewRisk = getMergedUseNewRisk({
    newRisk,
    riskResponse,
    riskParameters
  });

  if (mergedUseNewRisk) {
    const {
      isMpk, mpkIsDowngrade, mpkUseIdentityService
    } = convertMpkSetting({
      riskConfig,
      riskResponse
    });

    if (isMpk) {
      // 非降级的 MPK 账号风控验证
      if (mpkUseIdentityService) {
        return {
          isMpk,
          codeType,
          accountId,
          verifyType,
          verifyDetail,
          mpkIsDowngrade,
          convertedVerifyType,
          riskType: ERiskType.MPK
        };
      }

      // 降级到旧版主账号风控的 MPK 账号风控验证
      return {
        codeType,
        verifyType,
        verifyDetail,
        convertedVerifyType,
        mpkIsDowngrade: true,
        riskType: ERiskType.OLD_MAIN
      };
    }

    // 新版主账号风控验证
    if (verifyUrl) {
      return {
        accountId,
        verifyUrl,
        codeType,
        verifyType,
        verifyDetail,
        convertedVerifyType,
        riskType: ERiskType.NEW_MAIN
      };
    }

    const subRiskValidators = ((): Omit<ICommonRiskInfo, 'codeType'>[] => {
      // 过滤掉不合法的风控方式
      return validators.map(o => ({
        verifyType: o.VerifyType,
        verifyDetail: o.VerifyDetail,
        convertedVerifyType: convertVerifyType({
          type0: o.VerifyType,
          riskTypeConfig
        })
      })).filter(o => ![EConvertedVerifyType.NONE, EConvertedVerifyType.UNKNOWN].includes(o.convertedVerifyType));
    })();

    // 新版主账号风控验证，Validators 可能包括手机、邮箱、MFA 设备
    return {
      codeType,
      accountId,
      subRiskValidators,
      riskType: ERiskType.NEW_SUB
    };
  }

  const oldCodeType = getRiskValueViaConfig({
    riskConfig,
    riskResponse,
    riskConfigKey: 'DATA_PATH_VERIFY_CODE_TYPE',
    defaultValue: ''
  });
  const oldVerifyType = getRiskValueViaConfig({
    riskConfig,
    riskResponse,
    riskConfigKey: 'DATA_PATH_VERIFY_TYPE',
    defaultValue: ''
  });
  const oldVerifyDetail = getRiskValueViaConfig({
    riskConfig,
    riskResponse,
    riskConfigKey: 'DATA_PATH_VERIFY_DETAIL',
    defaultValue: ''
  });

  // 旧版主账号风控
  return {
    mpkIsDowngrade: false,
    codeType: oldCodeType,
    verifyType: oldVerifyType,
    verifyDetail: oldVerifyDetail,
    convertedVerifyType: convertVerifyType({
      type0: oldVerifyType,
      riskTypeConfig
    }),
    riskType: ERiskType.OLD_MAIN
  };
}

export {
  convertMpkSetting,
  getMergedUseNewRisk,
  convertRiskResponse
};
