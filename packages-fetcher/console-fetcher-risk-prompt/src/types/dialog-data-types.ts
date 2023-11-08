import {
  ParamsVerifySubAccount,
  DataVerificationValidator
} from '@alicloud/console-fetcher-risk-data';

import {
  ESceneKey,
  EDialogType,
  ESubVerificationDeviceType
} from '../enum';

export type TStringOrJsx = string | JSX.Element;

// 子账号风控弹窗，用户可以在不同的风控方式之间来回切换，因此每种风控方式都有对应的错误信息以及 PrimaryButtonDisabled 状态
export type TTypeOfPrimaryButton = ESubVerificationDeviceType | ESceneKey.MAIN_ACCOUNT;
export type TPrimaryButtonDisabledObject = {
  [Key in TTypeOfPrimaryButton]?: boolean
}
export type TKeyofErrorMessageObject = ESubVerificationDeviceType | ESceneKey;
export type TErrorMessageObject = {
  [Key in TKeyofErrorMessageObject]?: string
}

export type TSubGetVerificationToAuthData = {
  targetUserPrincipalName: string;
  subValidators: DataVerificationValidator[];
};

// 新版主账号风控的风控信息
export interface INewMainAccountRiskInfo {
  verifyUrl: string;
  verifyType: string;
  hasCancelButton?: boolean;
}

// 旧版主账号风控或 MPK 类型风控的风控信息
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

export interface IMainOrMpkData {
  code: string;
  requestId: string;
  isMpkDowngrade: boolean;
}

export interface IDialogData {
  dialogType: EDialogType;
  // 在请求风控验证接口时，会通过 block 方法锁定 dialog 使其无法点击。此时应该也禁止通过回车键请求风控验证接口
  dialogBlocked?: boolean;
  // 当无法从 GetMfaInfoToAuthV2 的响应中解析到正确的子账号验证方式时，会提示【系统没有检测到验证方式。】，此时需要隐藏确定按钮
  hideSubRiskSubmitButton?: boolean;
  // 用于定义每种风控方式对应的 errorMessage 以及 PrimaryButton 的 Disabled 状态
  errorMessageObject: TErrorMessageObject;
  primaryButtonDisabledObject: TPrimaryButtonDisabledObject;
  // 主账号风控信息，类型为旧版、新版或者 MPK
  mainAccountRiskInfo?: TMainAccountRiskInfo;
  oldMainOrMpkData?: IMainOrMpkData;
  // 子账号风控方式可能为多选，因此需要用数组方式来存储多种风控方式时的风控验证参数
  subVerificationParamArray?: ParamsVerifySubAccount[];
  subGetVerificationToAuthData?: TSubGetVerificationToAuthData;
  // 当子账号风控有多种风控方式可供选择时，currentSubVerificationDeviceType 用于定义用户当前选择的风控方式
  currentSubVerificationDeviceType?: ESubVerificationDeviceType;
}