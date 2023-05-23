import {
  ERiskType,
  EUnexpectedErrorType,
  EConvertedVerifyType
} from '../enum';

export interface IRiskPromptError extends Error {
  name: string;
  code: string;
  unexpectedErrorType?: string;
}

// MPK 配置项
export interface IMpkExtendSetting {
  isMpk?: string | boolean; // 是否是虚商
  useOldVersion?: string | boolean; // 对于虚商类型的账号，是否使用 /risk/sendVerifyMessage.json 来发送验证码（降级情况）
}

export interface ICommonRiskInfo {
  codeType: string;
  verifyDetail: string | boolean;
  // 接口被风控时，解析出来的风控方式为 ga、sms、email
  verifyType: string;
  convertedVerifyType: EConvertedVerifyType;
}

// 解析后的旧版主账号风控参数
export interface IOldMainRiskInfo extends ICommonRiskInfo {
  riskType: ERiskType.OLD_MAIN;
  mpkIsDowngrade?: boolean;
}

// 解析后的虚商类型的风控参数
export interface IMpkRiskInfo extends Omit<IOldMainRiskInfo, 'riskType'> {
  riskType: ERiskType.MPK;
  isMpk: boolean;
  accountId: string;
  mpkIsDowngrade: boolean; // 轻量级虚商是否降级
}

// 解析后的新版主账号风控参数
export interface INewMainRiskInfo extends ICommonRiskInfo {
  riskType: ERiskType.NEW_MAIN;
  accountId: string;
  verifyUrl: string; // 集团会员平台核身 URL
}

// 解析后的新版子账号风控参数
export interface INewSubRiskInfo {
  riskType: ERiskType.NEW_SUB;
  codeType: string;
  accountId: string; // 子账号 ID
  subRiskValidators: Omit<ICommonRiskInfo, 'codeType'>[];
}

export type TRiskInfo = IOldMainRiskInfo | INewMainRiskInfo | INewSubRiskInfo | IMpkRiskInfo;

export interface IRiskCanceledErrorProps {
  // errorCode / errorName / errorMessage
  unexpectedError?: string;
  unexpectedErrorType?: EUnexpectedErrorType;
}

export type TSetRiskCanceledErrorProps = (props: IRiskCanceledErrorProps) => void;