import {
  IRiskConfig,
  TRiskResponse,
  ICommonRiskInfo,
  IRiskParameters
} from '../../types';
import getRiskValueViaConfig from '../get-risk-value-via-config';

import convertVerifyType from './convert-verify-type';

interface IGetRiskInfoProps<T> {
  riskConfig?: IRiskConfig;
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