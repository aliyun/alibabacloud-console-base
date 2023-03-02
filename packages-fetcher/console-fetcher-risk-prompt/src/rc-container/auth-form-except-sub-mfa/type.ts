import {
  EAccountType,
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  EConvertedVerifyType
} from '../../enum';

type TSendVerifyCodeCommonType<T> = T & {
  codeType: string;
  accountId: string;
}

export interface IMpkOrSubProps {
  formType: 'mpk_or_sub_identity';
  verifyDetail?: string | boolean;
  accountType: EAccountType;
  verifyType: ESubVerificationDeviceType.EMAIL | ESubVerificationDeviceType.SMS | ESubVerificationDeviceType.VMFA;
}

export interface IOldMainProps {
  formType: 'old_main';
  verifyType: string;
  verifyDetail?: string | boolean;
  convertedVerifyType?: EConvertedVerifyType;
}
export type TSendVerifyCodeProps = TSendVerifyCodeCommonType<IMpkOrSubProps> | TSendVerifyCodeCommonType<IOldMainProps>;
export type TAuthFormProps = IMpkOrSubProps | IOldMainProps;