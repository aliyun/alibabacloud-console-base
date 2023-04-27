import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  ERiskType,
  EConvertedVerifyType
} from '../enum';

import {
  TRequestMethod
} from './risk-prompt-props';

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

export interface IOldMainAuthFormProps {
  riskType: ERiskType.OLD_MAIN;
  sendCodeUrl: string;
  sendCodeMethod: TRequestMethod;
  isMpkDowngrade: boolean;
  verifyType: string;
  verifyDetail?: string | boolean;
  convertedVerifyType?: EConvertedVerifyType;
}
export type TSendVerifyCodeProps = TSendVerifyCodeCommonType<IMpkAuthFormProps> | TSendVerifyCodeCommonType<ISubAuthFormProps> | TSendVerifyCodeCommonType<IOldMainAuthFormProps>;
export type TAuthFormProps = IMpkAuthFormProps | ISubAuthFormProps | IOldMainAuthFormProps;