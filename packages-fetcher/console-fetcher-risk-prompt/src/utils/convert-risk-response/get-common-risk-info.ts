import _get from 'lodash/get';

import {
  IRiskConfig,
  TRiskResponse,
  ICommonRiskInfo,
  IRiskParameters
} from '../../types';

import convertVerifyType from './convert-verify-type';

interface IGetRiskInfoProps<T> {
  riskConfig: Required<IRiskConfig>;
  mergedUseNewRisk: boolean;
  riskResponse: TRiskResponse<T>;
  riskParameters: IRiskParameters;
}

export default function getCommonRiskInfo<T>({
  riskConfig,
  riskResponse,
  mergedUseNewRisk,
  riskParameters
}: IGetRiskInfoProps<T>): ICommonRiskInfo {
  const oldCodeType = _get(riskResponse, riskConfig.dataPathOldCodeType, '') as string;
  const oldVerifyType = _get(riskResponse, riskConfig.dataPathOldVerifyType, '') as string;
  const oldVerifyDetail = _get(riskResponse, riskConfig.dataPathOldVerifyDetail, '') as string;
  const {
    codeType,
    validators = [],
    verifyType = '',
    verifyDetail = ''
  } = riskParameters;
  
  if (!mergedUseNewRisk) {
    return {
      codeType: oldCodeType,
      verifyType: oldVerifyType,
      verifyDetail: oldVerifyDetail,
      convertedVerifyType: convertVerifyType({
        riskConfig,
        type0: oldVerifyType
      })
    };
  }

  // 优先从 validators 取 verifyType & verifyDetail
  if (validators.length) {
    const {
      VerifyType: verifyTypeInValidator,
      VerifyDetail: verifyDetailInValidator
    } = validators[0];

    if (verifyTypeInValidator) {
      return {
        codeType,
        verifyType: verifyTypeInValidator,
        verifyDetail: verifyDetailInValidator,
        convertedVerifyType: convertVerifyType({
          riskConfig,
          type0: verifyTypeInValidator
        })
      };
    }
  }

  return {
    codeType,
    verifyType,
    verifyDetail,
    convertedVerifyType: convertVerifyType({
      riskConfig,
      type0: verifyType
    })
  };
}