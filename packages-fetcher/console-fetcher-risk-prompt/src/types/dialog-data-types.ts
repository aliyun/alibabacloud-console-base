import type {
  ParamsBindMfa,
  ParamsGetMfaInfoToAuth,
  ParamsGetMfaInfoToBind,
  ParamsVerifySubAccountMfa,
  DataTokenVerify,
  DataGetMfaInfoToAuth,
  DataGetMfaInfoToBind
} from '@alicloud/console-fetcher-risk-data';

import {
  EDialogType,
  ESubAccountIdentityServiceType
} from '../const';

export type TSubAccountIdentityServiceParams = {
  paramsType: ESubAccountIdentityServiceType.BIND_MFA;
  params: ParamsBindMfa;
} | {
  paramsType: ESubAccountIdentityServiceType.GET_MFA_INFO_TO_AUTH;
  params: ParamsGetMfaInfoToAuth;
} | {
  paramsType: ESubAccountIdentityServiceType.GET_MFA_INFO_TO_BIND;
  params: ParamsGetMfaInfoToBind;
} | {
  paramsType: ESubAccountIdentityServiceType.VERIFY_SUB_ACCOUNT_MFA;
  params: ParamsVerifySubAccountMfa;
};

export type TSubAccountIdentityServiceData = {
  dataType: ESubAccountIdentityServiceType.BIND_MFA;
  data: DataTokenVerify;
} | {
  dataType: ESubAccountIdentityServiceType.GET_MFA_INFO_TO_AUTH;
  data: DataGetMfaInfoToAuth;
} | {
  dataType: ESubAccountIdentityServiceType.GET_MFA_INFO_TO_BIND;
  data: DataGetMfaInfoToBind;
} | {
  dataType: ESubAccountIdentityServiceType.VERIFY_SUB_ACCOUNT_MFA;
  data: DataTokenVerify;
}

export interface INewMainAccountRiskInfo {
  verifyUrl: string;
  hasCancelButton?: boolean;
}

export interface IOldMainAccountOrMpkRiskInfo {
  isMpk: boolean;
  mpkIsDowngrade?: boolean;
}

export interface IMainAccountData {
  code: string;
  requestId: string;
}

export interface IDialogData {
  dialogType: EDialogType;
  errorMessage?: string;
  primaryButtonDisabled: boolean;
  fromBindU2FtoAuthU2F?: boolean;
  mainOrMpkAccountData?: IMainAccountData;
  newMainAccountRiskInfo?: INewMainAccountRiskInfo;
  oldMainOrMpkRiskInfo?: IOldMainAccountOrMpkRiskInfo;
  subAccountIdentityServiceData?: TSubAccountIdentityServiceData;
  subAccountIdentityServiceParams?: TSubAccountIdentityServiceParams;
}