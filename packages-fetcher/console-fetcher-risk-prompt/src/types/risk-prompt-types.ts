import {
  ERiskType,
  EVerifyType
} from '../const';

export interface IRiskValidator {
  VerifyDetail: string;
  VerifyType: string;
}

export interface IMpkExtendSetting {
  isMpk?: string | boolean; // 是否是虚商
  useOldVersion?: string | boolean; // 对于虚商类型的账号，是否使用 /risk/sendVerifyMessage.json 来发送验证码（降级情况）
}

export type TRiskResponse = Record<string, unknown>

export interface ICommonRiskInfo {
  codeType: string;
  verifyDetail: string;
  verifyType: string;
  convertedVerifyType: EVerifyType;
}

// 解析后的旧版主账号风控参数
export interface IOldMainRiskInfo extends ICommonRiskInfo {
  riskType: ERiskType.OLD_MAIN;
  mpkIsDowngrade: boolean;
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
export interface INewSubRiskInfo extends ICommonRiskInfo {
  riskType: ERiskType.NEW_SUB;
  accountId: string; // 子账号 ID
}

export type TRiskInfo = IOldMainRiskInfo | INewMainRiskInfo | INewSubRiskInfo | IMpkRiskInfo;

export interface IRiskPromptResolveData {
  verifyCode: string;
  verifyType: string;
  requestId?: string;
}

export type TNewRisk = boolean | ((o: TRiskResponse | undefined) => boolean);

export interface IPlainError extends Error {}

export interface IRiskError extends Error {
  name: string;
  code: string;
}

// 风控配置类型定义
export interface IRiskConfig {
  bySms?: string; // 通过短信验证
  byMfa?: string; // 通过邮箱验证
  byEmail?: string; // 通过 MFA 设备验证
  urlSetting?: string; // 设置用户风控验证方式地址
  coolingAfterSent?: number; // 发送验证码成功后的冷却时间（秒）
  coolingAfterSentFail?: number; // 发送验证码失败后的冷却时间（秒）
  dataPathCodeType?: string; // 如何从原始数据中获取旧版主账号风控码
  dataPathVerifyType?: string; // 如何从原始返回中获取旧版主账号的风控类型（邮箱、手机或者 MFA）
  dataPathVerifyDetail?: string; // 如何从原始返回中获取旧版主账号风控详细信息（邮箱或手机）
  dataPathVerifyUrl?: string; // 如何从原始返回中获取新版主账号风控的会员核身 URL 
  dataPathValidators?: string; // 如何从原始返回中获取新版子账号风控信息
  dataPathUserId?: string; // 如何从原始返回中中获取账号 ID
  dataPathExtend?: string; // 如何从原始返回中获取扩展信息，比如虚商相关的配置信息
  dataPathNewCodeType?: string; // 如何从原始返回中新版主账号风控的风控码
  dataPathNewVerifyType?: string; // 如何从原始返回中新版主账号风控的风控类型
  dataPathNewVerifyDetail?: string; // 如何从原始返回中获取新版主账号风控详细信息（邮箱或手机）
}