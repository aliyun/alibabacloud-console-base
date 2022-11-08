import {
  ICommonRiskInfo,
  IRiskResponse
} from '../../types';

import convertVerifyType from './convert-verify-type';

interface IGetRiskVerifyInfoProps {
  mergedUseNewRisk: boolean;
  riskResponse?: IRiskResponse;
}

export default function getCommonRiskInfo({
  mergedUseNewRisk,
  riskResponse
}: IGetRiskVerifyInfoProps): ICommonRiskInfo {
  // 新版风控 & 旧版风控 OneConsole 返回的大小写不一致
  const {
    CodeType, Validators, VerifyType, VerifyDetail, verifyType, verifyDetail, codeType
  } = riskResponse ?? {};

  if (!mergedUseNewRisk) {
    return {
      codeType: codeType ?? CodeType ?? '',
      verifyDetail: verifyDetail ?? VerifyDetail ?? '',
      verifyType: verifyType ?? VerifyType ?? '',
      convertedVerifyType: convertVerifyType(verifyType ?? VerifyType)
    };
  }

  if (Validators?.Validator?.length) {
    const {
      VerifyType: verifyTypeInValidator,
      VerifyDetail: verifyDetailInValidator
    } = Validators.Validator[0];

    return {
      codeType: CodeType ?? '',
      verifyDetail: verifyTypeInValidator,
      verifyType: verifyDetailInValidator,
      convertedVerifyType: convertVerifyType(verifyTypeInValidator)
    };
  }

  return {
    codeType: CodeType ?? '',
    verifyDetail: VerifyDetail ?? '',
    verifyType: VerifyType ?? '',
    convertedVerifyType: convertVerifyType(VerifyType)
  };
}