import {
  TNewRisk,
  TRiskInfo,
  IRiskResponse
} from '../../types';
import {
  ERiskType
} from '../../const';

import convertMpkSetting from './convert-mpk-setting';
import getCommonRiskInfo from './get-common-risk-info';
import getMergedUseNewRisk from './get-merged-use-new-risk';

interface IConvertRiskResponseProps {
  newRisk?: TNewRisk;
  riskResponse?: IRiskResponse;
}

function convertRiskResponse({
  newRisk,
  riskResponse
}: IConvertRiskResponseProps): TRiskInfo {
  const mergedUseNewRisk = getMergedUseNewRisk({
    newRisk,
    riskResponse
  });
  const commonRiskInfo = getCommonRiskInfo({
    mergedUseNewRisk,
    riskResponse
  });

  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    VerifyURL, Extend, AliyunIdkp
  } = riskResponse ?? {};

  if (mergedUseNewRisk) {
    const {
      isMpk, mpkIsDowngrade, mpkUseIdentityService
    } = convertMpkSetting(Extend);

    if (isMpk) {
      if (mpkUseIdentityService) {
        return {
          ...commonRiskInfo,
          isMpk,
          mpkIsDowngrade,
          riskType: ERiskType.MPK,
          accountId: AliyunIdkp ?? ''
        };
      }

      return {
        ...commonRiskInfo,
        riskType: ERiskType.OLD_MAIN,
        mpkIsDowngrade: true
      };
    }

    if (VerifyURL) {
      return {
        ...commonRiskInfo,
        riskType: ERiskType.NEW_MAIN,
        accountId: AliyunIdkp ?? '',
        verifyUrl: VerifyURL
      };
    }

    return {
      ...commonRiskInfo,
      riskType: ERiskType.NEW_SUB,
      accountId: AliyunIdkp ?? ''
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