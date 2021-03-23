interface IFnUriHelper {
  (input: string): string;
}

interface IRuleAndTarget {
  rule: RegExp;
  target: string;
}

interface IFnParseHash {
  (hash: string): string;
}

interface IFnParseResponse {
  (o: unknown): {
    msg?: string;
    code?: string;
    success?: boolean;
  };
}

type TIgnoreParsed = string | RegExp | ((input: string) => boolean);

type TUriHelper = string | RegExp | IRuleAndTarget | IFnUriHelper;

export interface IErrorInfo {
  message: string;
  name?: string;
  [k: string]: unknown;
}

export interface IErrorPosition {
  filename?: string; // 对应日志请求 URL 参数中的 file 字段
  lineno?: number; // 对应日志请求 URL 参数中的 line 字段
  colno?: number; // 对应日志请求 URL 参数中的 col 字段
}

export type TSpeedPoint = 's0' | 's1' | 's2' | 's3' | 's4' | 's5' | 's6' | 's7' | 's8' | 's9' | 's10';

export interface IResourceData {
  begin: number; // performance fetchStart 的时间戳
  dom: number; // DOM 解析耗时 domInteractive - responseEnd
  load: number; // 页面完全加载时间 loadEventStart - fetchStart
  res: PerformanceEntryList; // 上报的资源加载数据 performance.getEntriesByType('resource')
  dl: string; // 当前的 page URL
}

/**
 * 跟 https://yuque.antfin-inc.com/retcode/arms-retcode/ug62q7 上对不齐，应该是他们文档没有更新
 */
export interface IBlConfigBeforeReady {
  /**
   * 项目唯一 id，由 ARMS 在创建站点时自动生成，测试用 ad45dhvr9m@6594c08d3216a5d
   */
  pid: string;
  /**
   * 用户 ID，一般和 tag 一致
   */
  uid: string;
  /**
   * 传入的标记，每条日志都会携带该标记
   */
  tag?: string;
  environment?: 'prod' | 'pre' | 'daily';
  /**
   * 参考 https://yuque.antfin-inc.com/retcode/arms-retcode/urlreference#d3db13a5
   */
  imgUrl?: 'https://arms-retcode.aliyuncs.com/r.png?';
  /**
   * 页面名称，默认取当前页面 URL 的关键部分：host + pathname
   */
  page?: string;
  linkType?: string;
  /**
   * 采样率，设计得很奇怪，可选 1/10/100，对应的抽样率为 1/sample
   * - 1 → 100%
   * - 10 → 10%
   * - 100 → 1%
   */
  sample?: number;
  /**
   * 应该就是上报 PV 的采样率
   */
  pvSample?: number;
  /**
   * 禁用日志上报功能
   */
  disabled?: boolean;
  /**
   * 是否监听页面的 hashchange 事件并重新上报 PV，适用于单页面应用场景
   * 默认：false
   */
  enableSPA?: boolean;
  /**
   * 是否禁用 AJAX 请求监听，默认会监听并用于 API 调用成功率上报
   */
  disableHook?: boolean;
  /**
   * 是否忽略 page url 大小写
   * 默认：true
   */
  ignoreUrlCase?: boolean;
  /**
   * URL 过滤规则
   * 
   * @deprecated 使用 urlHelper
   */
  ignoreUrlPath?: null | TUriHelper | TUriHelper[];
  /**
   * API 过滤规则
   * 
   * @deprecated 使用 apiHelper
   */
  ignoreApiPath?: null | TUriHelper | TUriHelper[];
  /**
   * 代替 ignoreUrlPath
   * 
   * 在页面 URL 类似于 xxx.com/projects/123456 这样的场景中（projects 后面紧跟的是项目 id），如果将 xxx.com/projects/123456 作为 page，
   * 会导致在数据查看时页面无法聚成一类，所以需要过滤掉这些非关键字符。
   * 此设置项只在自动获取页面 URL 作为 page 时才会生效，如果手动调用 setPage 或 setConfig 方法修改过 page，或者设置了 enableSPA 的值为 true，则此设置项无效。
   * 默认值是一个数组，一般情况下不需要修改：
   * 
   * ```
   * [
   *   { // 将所有 path 中的数字变成 *
   *     rule: /\/([a-z\-_]+)?\d{2,20}/g,
   *     target: '/$1**'
   *   },
   *   /\/$/ // 去掉 url 末尾的 '/'
   * ]
   * ```
   */
  urlHelper?: TUriHelper | TUriHelper[];
  /**
   * 代替 ignoreApiPath，用法及含义同 urlHelper
   */
  apiHelper?: TUriHelper | TUriHelper[];
  /**
   * 是否初始化后自动发送 PV
   * 默认：true
   */
  autoSendPv?: boolean;
  autoSendPerf?: boolean;
  behavior?: boolean;
  useFmp?: boolean;
  sendResource?: boolean;
  enableApiCors?: boolean;
  enableConsole?: boolean;
  enableLinkTrace?: boolean;
  /**
   * 配合 enableSPA 使用，将 URL hash 解析为 page
   */
  parseHash?: IFnParseHash;
  /**
   * API 自动上报时返回值的解析方法
   */
  parseResponse?: IFnParseResponse;
}

export interface IBlConfig extends Required<IBlConfigBeforeReady> {
  release: string;
  region: string | null;
  startTime: number | null;
  ignore: {
    ignoreUrls: TIgnoreParsed[];
    ignoreApis: TIgnoreParsed[];
    ignoreErrors: TIgnoreParsed[];
    ignoreResErrors: TIgnoreParsed[];
  };
  setUsername: (() => string) | null;
}

/**
 * 修改配置项
 */
export interface IBlFnSetConfig {
  (config: Partial<IBlConfigBeforeReady>): void;
}

/**
 * 设置当前页面的 page name，默认直接上报 PV
 */
export interface IBlFnSetPage {
  (page: string, sendPv?: boolean): void;
}

/**
 * 设置公共字段
 */
export interface IBlFnSetCommonInfo {
  <T>(info: T): void;
}

/**
 * 上报自定义业务信息，每个自定义信息的 key 都会被加上前缀 `x-`，比如 'hello: world' 在日志数据中将是 'x-hello: world'
 */
export interface IBlFnCustom {
  <T>(info: T, sample?: number): void;
}

/**
 * 接口调用成功率上报
 * 
 * 返回类型：正常上报的时候是 true，否则是 arms 整个对象... 权当看不见吧...
 * 
 * api 还有一个方法签名，这里不推荐
 * api(info: {
 *   api: string; // 接口名
 *   success: boolean; // 是否成功
 *   time: number; // 耗时，其实应该叫 duration
 *   code?: string | number; // 返回码
 *   msg?: string; // 返回信息
 *   begin?: number; // 请求开始时间戳
 *   traceId?: string; // EagleEye-TraceID 值
 *   sid?: string; // 会话 ID
 * }): void;
 */
export interface IBlFnApi {
  (url: string, success: boolean, duration: number, code?: string | number, message?: string, timeStarted?: number, traceId?: string, sessionId?: string): void;
}

/**
 * 上报页面中的 JS 错误（非全局，全局错误会被自动捕获并上报）或者使用者想要关注的异常，message 相同的错误会以 times: number 的形式聚合
 * 
 * 返回类型：正常上报的时候是 true，否则是 arms 整个对象... 权当看不见吧...
 */
export interface IBlFnError {
  (err: Error | string | IErrorInfo, position?: Error | IErrorPosition): void;
}

/**
 * 自定义测速上报，短时间内多个调用会被汇总到一个日志，如
 * 
 * speed('s0', 1); // 被下一个覆盖
 * speed('s0', 12);
 * speed('s1', 123);
 * 
 * 最终会只有一个日志包含 s0: 12 + s1: 123
 */
export interface IBlFnSpeed {
  (point: TSpeedPoint, time?: number): void;
}

/**
 * 求和统计
 */
export interface IBlFnSum {
  (key: string, value?: number): void;
}

/**
 * 求平均统计
 */
export interface IBlFnAvg {
  (key: string, value?: number): void;
}

/**
 * 求百分比统计
 */
export interface IBlFnPercent {
  (key: string, subKey: string, value?: number): void;
}

/**
 * 资源上报
 * 
 * 如果使用主动上报，需要把静默上报 resource 部分关掉（config.sendResource 设为 false）否则有可能一次访问中上报多次 resource，会有重复信息。
 */
export interface IBlFnResource {
  (data: IResourceData, sample?: number): void;
}

export type TBlPipe = ['setConfig', ...Parameters<IBlFnSetConfig>] |
['setPage', ...Parameters<IBlFnSetPage>] |
['setCommonInfo', ...Parameters<IBlFnSetCommonInfo>] |
['custom', ...Parameters<IBlFnCustom>] |
['api', ...Parameters<IBlFnApi>] |
['error', ...Parameters<IBlFnError>] |
['speed', ...Parameters<IBlFnSpeed>] |
['sum', ...Parameters<IBlFnSum>] |
['avg', ...Parameters<IBlFnAvg>] |
['percent', ...Parameters<IBlFnPercent>] |
['resource', ...Parameters<IBlFnResource>];

/**
 * window.__bl 由 https://retcode.alicdn.com/retcode/bl.js 创建，但在初始化前传参可以通过创建一个全局对象 `__bl` 如下
 */
export interface IBlBeforeReady {
  config: IBlConfigBeforeReady;
  pipe?: TBlPipe[];
}

/**
 * bl 脚本加载完成后，`window.__bl` 会被覆盖，`config` 会被吸收成 `_conf`。
 * `__bl` 对象下边有很多的属性（有些我认为是没必要放到对象上的），这里只提供我们有可能用到的。
 * 
 * https://yuque.antfin-inc.com/retcode/arms-retcode/api - 日志上报 API
 * https://yuque.antfin-inc.com/retcode/arms-retcode/other#kdsbcg - 其它 API
 */
export interface IBl {
  _conf: Required<IBlConfig>;
  pipe?: TBlPipe[];
  setConfig: IBlFnSetConfig;
  setPage: IBlFnSetPage;
  setCommonInfo: IBlFnSetCommonInfo;
  custom: IBlFnCustom;
  api: IBlFnApi;
  error: IBlFnError;
  speed: IBlFnSpeed;
  sum: IBlFnSum;
  avg: IBlFnAvg;
  percent: IBlFnPercent;
  resource: IBlFnResource;
}

export interface IWindowWithBl extends Window {
  __bl?: IBl | IBlBeforeReady;
}
