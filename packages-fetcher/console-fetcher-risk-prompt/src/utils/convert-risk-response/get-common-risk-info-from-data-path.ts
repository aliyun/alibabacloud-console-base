import _get from 'lodash/get';

import {
  IRiskConfig,
  TRiskResponse,
  IRiskValidator,
  ICommonRiskInfo
} from '../../types';

import convertVerifyType from './convert-verify-type';

interface IGetRiskInfoFromDataPathProps {
  riskConfig: Required<IRiskConfig>;
  riskResponse?: TRiskResponse;
  mergedUseNewRisk: boolean;
}

export default function getCommonRiskInfoFromDataPath({
  riskConfig,
  riskResponse,
  mergedUseNewRisk
}: IGetRiskInfoFromDataPathProps): ICommonRiskInfo {
  const codeType = _get(riskResponse, riskConfig.dataPathCodeType, '') as string;
  const verifyType = _get(riskResponse, riskConfig.dataPathVerifyType, '') as string;
  const verifyDetail = _get(riskResponse, riskConfig.dataPathVerifyDetail, '') as string;
  const validators = _get(riskResponse, riskConfig.dataPathValidators, []) as IRiskValidator[];
  const newCodeType = _get(riskResponse, riskConfig.dataPathNewCodeType, '') as string;
  const newVerifyType = _get(riskResponse, riskConfig.dataPathNewVerifyType, '') as string;
  const newVerifyDetail = _get(riskResponse, riskConfig.dataPathNewVerifyDetail, '') as string;
  
  if (!mergedUseNewRisk) {
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

  if (validators.length) {
    const {
      VerifyType: verifyTypeInValidator,
      VerifyDetail: verifyDetailInValidator
    } = validators[0];

    return {
      codeType: newCodeType,
      verifyType: verifyTypeInValidator,
      verifyDetail: verifyDetailInValidator,
      convertedVerifyType: convertVerifyType({
        riskConfig,
        type0: verifyTypeInValidator
      })
    };
  }

  return {
    codeType: newCodeType,
    verifyType: newVerifyType,
    verifyDetail: newVerifyDetail,
    convertedVerifyType: convertVerifyType({
      riskConfig,
      type0: newVerifyType
    })
  };
}