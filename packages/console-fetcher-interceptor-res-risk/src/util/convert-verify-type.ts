import {
  EVerifyType
} from '../enum';
import {
  IFetcherInterceptorConfig
} from '../types';

export default function convertVerifyType(type0: string, riskConfig: IFetcherInterceptorConfig): EVerifyType {
  switch (type0) {
    case riskConfig.BY_SMS:
      return EVerifyType.SMS;
    case riskConfig.BY_EMAIL:
      return EVerifyType.EMAIL;
    case riskConfig.BY_MFA: // MFA 既不需要 info
      return EVerifyType.MFA;
    default:
      return type0 ? EVerifyType.UNKNOWN : EVerifyType.NONE;
  }
}
