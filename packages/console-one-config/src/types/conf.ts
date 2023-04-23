import {
  IShittyFeatureSwitch
} from './conf0';

export interface IFeatureSwitch extends IShittyFeatureSwitch {}

// 整容后的 UBSMS
export interface IOpenStatus {
  enabled: boolean; // 已开通
  authentication: boolean; // 已授权
  inDebtSoon: boolean; // 即将欠费
  inDebt: boolean; // 欠费
  inDebtOverdue: boolean; // 欠费超期
  prohibitedByRiskControl: boolean; // 因风控而禁止
  prepaid: boolean;
  prepaidExpireSoon: boolean;
  prepaidOverdue: boolean;
  paused: boolean;
  keepProduct: boolean;
  site: boolean;
  servicizing: boolean;
  bizAPI: boolean;
  spiTest: boolean;
  // 非 boolean
  creditScore: string; // 信用分？ e.g. '0' 应该是数值
  spotAgreement: string; // 实际上应该是一个枚举，不过我只见过 'unsigned'
  arrearageStatus: string; // 实际上应该是一个枚举，不过我只见过 'unknown'
  userStopMode: string; // 实际上应该是一个枚举，不过我只见过 'keep'
}

// 整容后的 REGIONS 中的单个对象
export interface IRegion {
  id: string;
  name: string;
  physicalIds: string[];
  zones: {
    id: string;
    name: string;
  }[];
}

// 整容后的配置对象
export interface IConsoleOneConfig {
  // VIPER meta
  /**
   * Viper 上 OneConsole 应用的 ID
   */
  APP_ID: string;
  // 环境
  ONE: boolean; // window.ALIYUN_CONSOLE_CONFIG?.portalType === 'one'
  PRIVATE_CLOUD: boolean;
  ENV: 'prod' | 'pre' | 'daily'; // fEnv
  CHANNEL: string;
  LANG: string;
  LOCALE: string;
  SEC_TOKEN: string;
  // 用户
  ACCOUNT: {
    ID: string; // CURRENT_PK
    ID_MAIN: string; // MAIN_ACCOUNT_PK
    TYPE: 'main' | 'sub' | 'sts'; // ACCOUNT_TYPE
    CERTIFIED: boolean; // IS_CERTIFIED === 'true'
  };
  // VIPER 配置
  REGIONS: IRegion[];
  OPEN_STATUS?: Record<string, IOpenStatus>; // 产品开通状态（UBSMS 信息），OPEN_STATUS 净化而来
  LINK: Record<string, string>; // 渠道链接，CHANNEL_LINKS
  FEATURE_SWITCH: Record<string, IFeatureSwitch>; // 渠道功能开关，CHANNEL_FEATURE_STATUS
  FEATURE_GRAY: Record<string, boolean>; // 渠道功能灰度，FEATURE_STATUS
  API_RESULT: Record<string, unknown>; // 项目配置 → 初始 API 调用，STATIC_API 剥出 data
  RULE_CONFIG: Record<string, string>; // 项目配置 → 规则中心
  LABELS: Record<string, unknown[]>; // 项目配置 → 用户标签
  USER_PREFERENCE: Record<string, Record<string, string>>; // 项目配置 → 用户偏好 e.g. `{ 'xx': { yuck: 'fou' } }`
  NEW_VERSION: boolean; // 项目配置 → 新旧版本切换
}
