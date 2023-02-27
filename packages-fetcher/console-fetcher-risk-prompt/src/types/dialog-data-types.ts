import type {
  ParamsBindMfa,
  ParamsGetMfaInfoToBind,
  ParamsVerifySubAccount,
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
export type TMainAccount = 'main_account';
export type TRiskTypeOfPrimaryButton = ESubVerificationDeviceType | TMainAccount;
export type TPrimaryButtonDisabledObject = Record<Partial<TRiskTypeOfPrimaryButton>, boolean>

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

export type TSubGetVerificationToAuthData = {
  targetUserPrincipalName: string;
  verificationOrBindValidators: TGetVerificationInfoToAuthData[];
};

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

export type TMainAccountRiskInfo = {
  type: 'new_main';
  riskInfo: INewMainAccountRiskInfo;
} | {
  type: 'old_main_or_mpk';
  riskInfo: IOldMainAccountOrMpkRiskInfo;
}

export interface IMainAccountData {
  code: string;
  requestId: string;
}

export interface IDialogData {
  dialogType: EDialogType;
  fromBindU2FtoAuthU2F?: boolean;
  apiErrorMessage?: string;
  subU2fAuthApiErrorMessage?: string;
  mainAccountRiskInfo?: TMainAccountRiskInfo;
  primaryButtonDisabledObject: TPrimaryButtonDisabledObject;
  subBindMfaStep?: ESubBindMfaStep;
  subBindMfaParams?: ParamsBindMfa;
  mainOrMpkAccountData?: IMainAccountData;
  subVerificationDeviceType?: ESubVerificationDeviceType | TBindMfa;
  subIdentityServiceParams?: TSubIdentityServiceParams;
  subGetMfaInfoToBindData?: DataGetMfaInfoToBind;
  subGetVerificationToAuthData?: TSubGetVerificationToAuthData;
}