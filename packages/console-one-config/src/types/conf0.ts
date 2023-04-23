// 功能开关原屎输出
export interface IShittyFeatureSwitch {
  status: boolean;
  attribute: {
    regions: string[];
    customAttrs: Record<string, string>;
  };
}

// UBSMS 原屎输出
export interface IShittyOpenStatus {
  enabled: 'true' | 'false'; // 已开通
  authentication: 'true' | 'false'; // 已授权
  inDebtSoon: 'true' | 'false'; // 即将欠费
  inDebt: 'true' | 'false'; // 欠费
  inDebtOverdue: 'true' | 'false'; // 欠费超期
  prohibitedByRiskControl: 'true' | 'false'; // 因风控而禁止
  prepaid: 'true' | 'false';
  prepaidExpireSoon: 'true' | 'false';
  prepaidOverdue: 'true' | 'false';
  paused: 'true' | 'false';
  keepProduct: 'true' | 'false';
  site: 'true' | 'false';
  servicizing: 'true' | 'false';
  bizAPI: 'true' | 'false';
  spiTest: 'true' | 'false';
  // 非 boolean
  creditScore: string; // 信用分？ e.g. '0' 应该是数值
  spotAgreement: string; // 实际上应该是一个枚举，不过我只见过 'unsigned'
  arrearageStatus: string; // 实际上应该是一个枚举，不过我只见过 'unknown'
  userStopMode: string; // 实际上应该是一个枚举，不过我只见过 'keep'
}

// 无比狗屎的接口静态输出——为什么不指定一下输出到某个层级呢，跟他们讲么又一堆狗屁稳定性借口，不能吐槽更多
export interface IShittyStaticApi<T = unknown> {
  code: string;
  data?: T;
}

// REGIONS 原屎输出
export interface IShittyRegion {
  regionId: string; // e.g. cn-beijing
  name: string; // e.g. 华北2（北京）
  physicalList: { // 固定 1 个，但不确定...
    id: string; // e.g. cn-beijing-btc-a01
  }[];
  zoneList: {
    zoneId: string; // cn-beijing-f
    name: string; // 北京 可用区F
  }[];
}

// ALIYUN_CONSOLE_CONFIG 原屎输出
export interface IShittyConsoleOneConfig {
  // 环境
  portalType?: 'one'; // 有 ALIYUN_CONSOLE_CONFIG 的不一定就等于 OneConsole（有的自建控制台也会用这个全局变量）
  IS_PRIVATE_CLOUD?: 'true'; // 专有云专有
  fEnv?: 'daily' | 'pre'; // 线上没有
  CHANNEL?: string; // e.g. 'OFFICIAL'
  LANG?: string; // e.g. 'zh'、'en'、'ja'、'zh'（之前繁体是 zt 被改成 zh 了）
  LOCALE?: string; // e.g. 'zh-CN'、'en-US'、'ja-JP'、'zh-TW'
  SEC_TOKEN?: string; // 执行 POST 请求时需要插入请求体的 `sec_token` 的安全码（也可能是 `secToken`...）
  // 用户
  ACCOUNT_TYPE?: 'main' | 'sub' | 'sts';
  CURRENT_PK?: string;
  MAIN_ACCOUNT_PK?: string; // 对应主账号 ID
  IS_CERTIFIED?: 'true' | 'false'; // 用户已实名
  // VIPER meta
  APP_ID?: string; // 2021/06 新增，对应 VIPER 上的应用 ID，可快速对应的 VIPER 应用，一般用于全局性的日志
  // VIPER 配置
  REGIONS?: IShittyRegion[]; // 根据应用基础信息的「Location 服务应用」获取，没有则为空
  OPEN_STATUS?: Record<string, IShittyOpenStatus>; // 项目配置 → UBSMS（即产品开通状态，不配的这个对象不存在 💩）
  CHANNEL_LINKS?: Record<string, string>; // 渠道链接
  CHANNEL_FEATURE_STATUS?: Record<string, IShittyFeatureSwitch>; // 渠道功能开关
  FEATURE_STATUS?: Record<string, boolean>; // 渠道功能灰度
  STATIC_API?: Record<string, IShittyStaticApi>; // 项目配置 → 初始 API 调用
  RULE_CONFIG?: Record<string, string>; // 项目配置 → 规则中心
  LABELS?: Record<string, unknown[]>; // 项目配置 → 用户标签
  USER_PREFERENCE?: Record<string, Record<string, string>>; // 项目配置 → 用户偏好 e.g. `{ 'xx': { yuck: 'fou' } }`
  NEW_VERSION?: 'true' | 'false' | ''; // 项目配置 → 新旧版本切换
  // 以下可能是狗屎 💩
  // PORTAL_Id: 'OFFICIAL';
  // ACCOUNT_LOGIN_LINK: string;
  // ACCOUNT_STRUCTURE: '2' | '3' | '4'; // 主账号 = 2，RAM = 3, STS = 4，ACCOUNT_TYPE 够了
  // BLOCK: Record<string, boolean>; // e.g. { canShowTips: false, canShowFeedbackButton: false, ... }
  // CHANNEL_ACTIONS: Record<string, boolean>; // e.g. { canUseListenerForward: true, canChangeVPCAddress: true, ... }
  // 以下绝对是狗屎 💩💩
  // ACCOUNT_NAME: ''; // 永远是空串
  // CHANNEL_REGION_SETTING: {};
  // REGION_BAR_SETTING: {};
  // LINKS: Record<string, string>; // 旧版 viper 的输出，废弃
}

export interface IWindow extends Window {
  ALIYUN_CONSOLE_CONFIG?: IShittyConsoleOneConfig;
}
