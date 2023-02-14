import type {
  ParamsBindMfa,
  ParamsGetMfaInfoToBind,
  ParamsVerifySubAccount,
  DataTokenVerify,
  DataGetMfaInfoToBind,
  DataVerificationValidator
} from '@alicloud/console-fetcher-risk-data';
import {
  ESubVerificationDeviceType
} from '@alicloud/console-fetcher-risk-data';

import {
  EDialogType,
  ESubBindMfaStep,
  ESubIdentityServiceType
} from '../enum';

export type TStringOrJsx = string | JSX.Element;
export type TBindMfa = 'bind_mfa';

export type TSubIdentityServiceParams = {
  paramsType: ESubIdentityServiceType.GET_MFA_INFO_TO_BIND;
  params: ParamsGetMfaInfoToBind;
} | {
  paramsType: ESubIdentityServiceType.VERIFY_SUB_ACCOUNT;
  params: ParamsVerifySubAccount[];
}

// 在 ESubVerificationDeviceType（U2F/VMFA/EMAIL/SMS）的基础上增加 choose_mfa_to_bind
export type TGetVerificationInfoToAuthData = DataVerificationValidator | {
  deviceType: TBindMfa;
}

export type TSubIdentityServiceData = {
  dataType: ESubIdentityServiceType.GET_MFA_INFO_TO_BIND;
  data: DataGetMfaInfoToBind;
} | {
  dataType: ESubIdentityServiceType.VERIFY_SUB_ACCOUNT;
  data: DataTokenVerify;
} | {
  dataType: ESubIdentityServiceType.GET_VERIFICATION_INFO_TO_AUTH;
  data: {
    targetUserPrincipalName: string;
    verificationOrBindValidators: TGetVerificationInfoToAuthData[];
  };
}

export interface INewMainAccountRiskInfo {
  verifyUrl: string;
  verifyType: string;
  hasCancelButton?: boolean;
}

export interface IOldMainAccountOrMpkRiskInfo {
  isMpk: boolean;
  verifyType: string;
  mpkIsDowngrade?: boolean;
}

export interface IMainAccountData {
  code: string;
  requestId: string;
}

export interface IDialogData {
  dialogType: EDialogType;
  primaryButtonDisabled: boolean;
  fromBindU2FtoAuthU2F?: boolean;
  subInvalidValidators?: boolean;
  apiErrorMessage?: string;
  subU2fAuthApiErrorMessage?: string;
  mainOrMpkAccountData?: IMainAccountData;
  newMainAccountRiskInfo?: INewMainAccountRiskInfo;
  oldMainOrMpkRiskInfo?: IOldMainAccountOrMpkRiskInfo;
  subBindMfaStep?: ESubBindMfaStep;
  subBindMfaParams?: ParamsBindMfa;
  subVerificationDeviceType?: ESubVerificationDeviceType | TBindMfa;
  subIdentityServiceData?: TSubIdentityServiceData;
  subIdentityServiceParams?: TSubIdentityServiceParams;
}