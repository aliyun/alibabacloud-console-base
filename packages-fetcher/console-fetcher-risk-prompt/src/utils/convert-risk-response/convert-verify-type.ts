import {
  EVerifyType,
  DEFAULT_RISK_CONFIG
} from '../../const';

export default function convertVerifyType(type0?: string): EVerifyType {
  switch (type0) {
    case DEFAULT_RISK_CONFIG.BY_SMS:
      return EVerifyType.SMS;
    case DEFAULT_RISK_CONFIG.BY_EMAIL:
      return EVerifyType.EMAIL;
    case DEFAULT_RISK_CONFIG.BY_MFA: // MFA 既不需要 info
      return EVerifyType.MFA;
    default:
      return type0 ? EVerifyType.UNKNOWN : EVerifyType.NONE;
  }
}