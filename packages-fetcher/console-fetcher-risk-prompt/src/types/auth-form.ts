import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  ERiskType,
  EConvertedVerifyType
} from '../enum';

type TSendVerifyCodeCommonType<T> = T & {
  codeType: string;
  accountId: string;
}

export interface IMpkAuthFormProps {
  riskType: ERiskType.MPK;
  verifyDetail?: string | boolean;
  verifyType: ESubVerificationDeviceType.EMAIL | ESubVerificationDeviceType.SMS | ESubVerificationDeviceType.VMFA;
}

export interface ISubAuthFormProps {
  riskType: ERiskType.NEW_SUB;
  verifyDetail?: string | boolean;
  verifyType: ESubVerificationDeviceType.EMAIL | ESubVerificationDeviceType.SMS | ESubVerificationDeviceType.VMFA;
}

export interface IOldMainProps {
  riskType: ERiskType.OLD_MAIN;
  verifyType: string;
  verifyDetail?: string | boolean;
  convertedVerifyType?: EConvertedVerifyType;
}
export type TSendVerifyCodeProps = TSendVerifyCodeCommonType<IMpkAuthFormProps> | TSendVerifyCodeCommonType<ISubAuthFormProps> | TSendVerifyCodeCommonType<IOldMainProps>;
export type TAuthFormProps = IMpkAuthFormProps | ISubAuthFormProps | IOldMainProps;