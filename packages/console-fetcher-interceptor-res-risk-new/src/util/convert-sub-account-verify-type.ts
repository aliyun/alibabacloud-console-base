import {
  IFetcherInterceptorConfig
} from '../types';
import {
  EVerifyType
} from '../const';

/**
 * 子账号风控时，用于将子账号风控类型转化为 EVerifyType（包含 UNKNOWN 以及 NONE）的函数
 */
export default function convertVerifyType(type0: string, riskConfig: IFetcherInterceptorConfig): EVerifyType {
  switch (type0) {
    case riskConfig.BY_SMS:
      return EVerifyType.SMS;
    case riskConfig.BY_EMAIL:
      return EVerifyType.EMAIL;
    case riskConfig.BY_MFA:
      return EVerifyType.MFA;
    default:
      return type0 ? EVerifyType.UNKNOWN : EVerifyType.NONE;
  }
}