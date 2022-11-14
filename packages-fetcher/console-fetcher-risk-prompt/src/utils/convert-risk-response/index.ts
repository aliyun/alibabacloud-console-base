import {
  TNewRisk,
  TRiskInfo,
  IRiskConfig,
  TRiskResponse,
  TRiskParametersGetter
} from '../../types';
import {
  ERiskType
} from '../../const';

import convertMpkSetting from './convert-mpk-setting';
import getRiskParameters from './get-risk-parameters';
import getMergedUseNewRisk from './get-merged-use-new-risk';
import getCommonRiskInfoFromDataPath from './get-common-risk-info';

interface IConvertRiskResponseProps<T> {
  newRisk?: TNewRisk<T>;
  riskConfig: Required<IRiskConfig>;
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
    accountId,
    verifyUrl
  } = riskParameters;

  const mergedUseNewRisk = getMergedUseNewRisk({
    newRisk,
    riskResponse,
    riskParameters
  });
  const commonRiskInfo = getCommonRiskInfoFromDataPath({
    riskConfig,
    riskResponse,
    mergedUseNewRisk,
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
          ...commonRiskInfo,
          isMpk,
          accountId,
          mpkIsDowngrade,
          riskType: ERiskType.MPK
        };
      }

      return {
        ...commonRiskInfo,
        riskType: ERiskType.OLD_MAIN,
        mpkIsDowngrade: true
      };
    }

    if (verifyUrl) {
      return {
        ...commonRiskInfo,
        accountId,
        verifyUrl,
        riskType: ERiskType.NEW_MAIN
      };
    }

    return {
      ...commonRiskInfo,
      accountId,
      riskType: ERiskType.NEW_SUB
    };
  }

  return {
    ...commonRiskInfo,
    riskType: ERiskType.OLD_MAIN,
    mpkIsDowngrade: false
  };
}

export {
  convertMpkSetting,
  getMergedUseNewRisk,
  convertRiskResponse
};