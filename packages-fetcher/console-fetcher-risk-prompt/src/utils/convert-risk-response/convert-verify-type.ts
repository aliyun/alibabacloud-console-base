import type {
  TRiskTypeConfig
} from '../../types';
import {
  EConvertedVerifyType
} from '../../enum';

interface IProps {
  type0: string;
  riskTypeConfig: TRiskTypeConfig;
}

export default function convertVerifyType({
  type0,
  riskTypeConfig
}: IProps): EConvertedVerifyType {
  const {
    BY_SMS,
    BY_EMAIL,
    BY_MFA
  } = riskTypeConfig;

  switch (type0) {
    case BY_SMS:
      return EConvertedVerifyType.SMS;
    case BY_EMAIL:
      return EConvertedVerifyType.EMAIL;
    case BY_MFA:
      return EConvertedVerifyType.MFA;
    default:
      return type0 ? EConvertedVerifyType.UNKNOWN : EConvertedVerifyType.NONE;
  }
}