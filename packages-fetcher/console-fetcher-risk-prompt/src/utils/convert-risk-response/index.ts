import _get from 'lodash/get';

import {
  TNewRisk,
  TRiskInfo,
  IRiskConfig,
  TRiskResponse
} from '../../types';
import {
  ERiskType
} from '../../const';

import convertMpkSetting from './convert-mpk-setting';
import getMergedUseNewRisk from './get-merged-use-new-risk';
import getCommonRiskInfoFromDataPath from './get-common-risk-info-from-data-path';

interface IConvertRiskResponseProps {
  newRisk?: TNewRisk;
  riskConfig: Required<IRiskConfig>;
  riskResponse?: TRiskResponse;
}

function convertRiskResponse({
  newRisk,
  riskConfig,
  riskResponse
}: IConvertRiskResponseProps): TRiskInfo {
  const verifyUrl = _get(riskResponse, riskConfig.dataPathVerifyUrl, '') as string;
  const accountId = _get(riskResponse, riskConfig.dataPathUserId, '') as string;

  const mergedUseNewRisk = getMergedUseNewRisk({
    newRisk,
    riskConfig,
    riskResponse
  });
  const commonRiskInfo = getCommonRiskInfoFromDataPath({
    riskConfig,
    riskResponse,
    mergedUseNewRisk
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