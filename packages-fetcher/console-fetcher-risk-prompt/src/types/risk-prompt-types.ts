import {
  ERiskType,
  EVerifyType
} from '../const';

export interface IOriginalRiskValidator {
  VerifyDetail: string;
  VerifyType: string;
}

export interface ICommonRiskInfo {
  codeType: string;
  verifyDetail: string;
  verifyType: string;
  convertedVerifyType: EVerifyType;
}

export interface IMpkExtendSetting {
  isMpk: string; // 是否是虚商
  useOldVersion: string; // 对于虚商类型的账号，是否使用 /risk/sendVerifyMessage.json 来发送验证码（降级情况）
}

// OneConsole 返回的新版风控的请求响应
export interface IRiskResponse {
  // 新版风控会有以下字段
  VerifyURL?: string; // 新版主账号的核身框 URL
  CodeType?: string;
  AliyunIdkp?: string;
  VerifyType?: string;
  VerifyDetail?: string;
  Validators?: {
    Validator?: IOriginalRiskValidator[];
  };
  Extend?: IMpkExtendSetting;
  // 旧版本的主账号风控会有以下的字段（首字母小写）
  codeType?: string;
  verifyType?: string;
  verifyDetail?: string;
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

export type TNewRisk = boolean | ((o: IRiskResponse | undefined) => boolean);

export interface IPlainError extends Error {}

export interface IRiskError extends Error {
  name: string;
  code: string;
}
