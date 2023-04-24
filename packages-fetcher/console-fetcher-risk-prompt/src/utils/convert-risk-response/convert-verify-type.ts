import {
  EConvertedVerifyType
} from '../../enum';
import {
  BUILT_IN_RISK_CONFIG
} from '../../const';

export default function convertVerifyType(type0: string): EConvertedVerifyType {
  const {
    bySms,
    byEmail,
    byMfa
  } = BUILT_IN_RISK_CONFIG;

  switch (type0) {
    case bySms:
      return EConvertedVerifyType.SMS;
    case byEmail:
      return EConvertedVerifyType.EMAIL;
    case byMfa:
      return EConvertedVerifyType.MFA;
    default:
      return type0 ? EConvertedVerifyType.UNKNOWN : EConvertedVerifyType.NONE;
  }
}