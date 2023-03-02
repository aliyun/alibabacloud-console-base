import {
  TNewRisk,
  TRiskInfo,
  IRiskConfig,
  TRiskResponse,
  ICommonRiskInfo,
  TRiskParametersGetter
} from '../../types';
import {
  ERiskType,
  EConvertedVerifyType
} from '../../enum';

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
  const riskParameters = getRiskParameters({
    riskConfig,
    riskResponse,
    riskParametersGetter
  });
  const {
    accountId, verifyUrl, codeType,
    validators = [], verifyType = '', verifyDetail = ''
  } = riskParameters;
  const convertedVerifyType = convertVerifyType(verifyType);

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

      return {
        codeType,
        verifyType,
        verifyDetail,
        convertedVerifyType,
        mpkIsDowngrade: true,
        riskType: ERiskType.OLD_MAIN
      };
    }

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
        convertedVerifyType: convertVerifyType(o.VerifyType)
      })).filter(o => ![EConvertedVerifyType.NONE, EConvertedVerifyType.UNKNOWN].includes(o.convertedVerifyType));
    })();

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
    riskConfigKey: 'dataPathOldCodeType',
    defaultValue: ''
  });
  const oldVerifyType = getRiskValueViaConfig({
    riskConfig,
    riskResponse,
    riskConfigKey: 'dataPathOldVerifyType',
    defaultValue: ''
  });
  const oldVerifyDetail = getRiskValueViaConfig({
    riskConfig,
    riskResponse,
    riskConfigKey: 'dataPathOldVerifyDetail',
    defaultValue: ''
  });

  return {
    mpkIsDowngrade: false,
    codeType: oldCodeType,
    verifyType: oldVerifyType,
    verifyDetail: oldVerifyDetail,
    convertedVerifyType: convertVerifyType(oldVerifyType),
    riskType: ERiskType.OLD_MAIN
  };
}

export {
  convertMpkSetting,
  getMergedUseNewRisk,
  convertRiskResponse
};