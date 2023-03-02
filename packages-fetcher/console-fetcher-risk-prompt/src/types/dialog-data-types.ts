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
  ESubBindMfaStep
} from '../enum';

export type TStringOrJsx = string | JSX.Element;

// 子账号风控弹窗，用户可以在不同的风控方式（包括绑定 MFA）来回切换，因此每种风控方式都有对应的错误信息以及 PrimaryButtonDisabled 状态
export type TTypeOfPrimaryButton = ESubVerificationDeviceType | 'mainAccount';
export type TPrimaryButtonDisabledObject = {
  [Key in TTypeOfPrimaryButton]: boolean
}
export type TTypeOfErrorMessage = ESubVerificationDeviceType | 'bindMfa' | 'mainAccount' | 'riskPromptError';
export type TErrorMessageObject = {
  [Key in TTypeOfErrorMessage]?: string
}

// 在 ESubVerificationDeviceType（U2F/VMFA/EMAIL/SMS）的基础上增加 bindMfa
export type TGetVerificationInfoToAuthData = DataVerificationValidator | {
  deviceType: 'bindMfa';
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
  // 用于定义每种风控方式对应的 errorMessage 以及 PrimaryButton 的 Disabled 状态
  errorMessageObject: TErrorMessageObject;
  primaryButtonDisabledObject: TPrimaryButtonDisabledObject;
  fromBindU2FtoAuthU2F?: boolean;
  // 主账号风控信息（包括旧版、新版以及 MPK）。由于这三种不可能同时出现，因此可以放在一个对象里面
  mainAccountRiskInfo?: TMainAccountRiskInfo;
  // 子账号绑定 MFA 的步骤流程
  subBindMfaStep?: ESubBindMfaStep;
  // 子账号绑定 MFA 的参数
  subBindMfaParams?: ParamsBindMfa;
  mainOrMpkAccountData?: IMainAccountData;
  subVerificationParams?: ParamsVerifySubAccount[];
  subGetMfaInfoToBindData?: DataGetMfaInfoToBind;
  subGetMfaInfoToBindParams?: ParamsGetMfaInfoToBind;
  subGetVerificationToAuthData?: TSubGetVerificationToAuthData;
  // 当子账号风控有多种风控方式可供选择时，currentSubVerificationDeviceType 用于定义用户当前选择的风控方式
  currentSubVerificationDeviceType?: ESubVerificationDeviceType | 'bindMfa';
}