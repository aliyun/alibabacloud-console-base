import {
  EAccountType,
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  EVerifyType
} from '../../enum';

type TSendVerifyCodeCommonType<T> = T & {
  codeType: string;
  accountId: string;
}

type TAuthFormCommonType<T> = T & {
  urlSetting: string;
}

export interface IIdentitySubProps {
  apiType: 'identity_send_code';
  verifyDetail?: string | boolean;
  accountType: EAccountType;
  verifyType: ESubVerificationDeviceType.EMAIL | ESubVerificationDeviceType.SMS;
}

export interface IIdentityMpkProps extends Omit<IIdentitySubProps, 'verifyType'> {
  verifyType: ESubVerificationDeviceType.EMAIL | ESubVerificationDeviceType.SMS | ESubVerificationDeviceType.VMFA;
}

export interface IOldMainProps {
  apiType: 'old_main_send_code';
  verifyType: string;
  verifyDetail?: string;
  convertedVerifyDetail?: EVerifyType;
}

export type TIdentitySendVerifyCodeProps = TSendVerifyCodeCommonType<IIdentitySubProps> | TSendVerifyCodeCommonType<IIdentityMpkProps>;
export type TOldMainSendVerifyCodeProps = TSendVerifyCodeCommonType<IOldMainProps>
export type TSendVerifyCodeProps = TIdentitySendVerifyCodeProps | TOldMainSendVerifyCodeProps;

export type TIdentityAuthFormProps = TAuthFormCommonType<IIdentitySubProps> | TAuthFormCommonType<IIdentityMpkProps>;
export type TOldMainAuthFormProps = TAuthFormCommonType<IOldMainProps>;
export type TAuthFormProps = TIdentityAuthFormProps | TOldMainAuthFormProps;