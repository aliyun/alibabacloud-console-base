export interface IFnDefaultParams {
  (): Record<string, unknown>;
}

export type TDefaultParams = Record<string, unknown> | IFnDefaultParams;

export type TFnOnBeforeSend = (options: IFactoryOptions) => void | boolean;

export interface IFactoryOptions {
  /**
   * logstore 所在的 SLS project
   */
  project: string;
  /**
   * project 的外网访问域名，在 SLS 控制台 project 概览页可以找到，
   * 如 `cn-hangzhou.log.aliyuncs.com`（仅跟 project 所在地域有关）
   */
  endpoint: string;
  /**
   * SLS project 下的 logstore，必须开通 Web Tracking 功能，日志记录的存储点
   */
  logstore: string;
  /**
   * 不知所谓的参数，但必需，说是保留字段，默认 `0.6.0`（文档中的版本号），请不要使用
   */
  apiVersion?: string;
  /**
   * 生产出的日志方法的整体采样率，可在调用时由方法参数覆盖，范围为 (0, 1]，默认 1
   */
  sampling?: number;
  /**
   * 生产出的日志方法的整体延时，可在调用时由方法参数覆盖，单位 ms
   */
  delay?: number;
  /**
   * 默认参数，避免每次都要传，可以是静态数据或产生动态数据的方法，这些参数可以覆盖自动记录的参数，
   * 但会被日志方法的第二个参数 `params` 中对应的字段覆盖
   */
  defaultParams?: TDefaultParams;
  /**
   * 上报之前进行判断是否继续，返回 false 以阻止上报
   * 
   * 在某些场景下需要禁用日志上报功能，比如国外禁止将日志上报到国内的 logstore
   */
  onBeforeSend?: TFnOnBeforeSend;
}

/**
 * sls 快捷方法额外参数
 */
export interface ILogOptionsQuick {
  /**
   * 覆盖 IFactoryOptions 的 sampling 设置，仅针对当前日志
   */
  sampling?: number;
  /**
   * 覆盖 IFactoryOptions 的 delay 设置，仅针对当前日志
   */
  delay?: number;
  /**
   * 有日志只需要在应用起来后记录一次，后续的将被丢弃
   * 
   * - true 表示以该 topic 做判断，针对该 topic 只记录一次
   * - 如果是字符串，则以「topic + 此字符串」做判断
   */
  once?: true | string;
  /**
   * 日志不是强需求，不能压过业务，要业务先行。网络请求一般在页面的一开始最密集，如果日志在这时上报会造成网络阻塞而产生性能问题。
   * 
   * 办法是先积压着，等到时间到了，再把积压着的日志一起上报。
   * 
   * 所以，为了提升性能，做了以下事情：
   * 
   * 1. 应用起来后，默认有 10s 的静默时间，这段时间的日志会被积压，用于给应用的请求让路
   * 2. 整体或单个日志的延时时间
   * 3. 整体或单个日志的采样率
   * 4. 有的日志只会发送一次
   * 5. 日志发送前也有一个很短的等待时间，在这段时间内，如果有新的日志进来，也将被积压，并重新计时
   * 6. 最后，积压的日志利用 POST 请求对日志进行合并发送
   * 
   * 然而，总有例外，有的日志希望是即时的，比如需要拿它来算 PvUv，instant 就是为此而生。
   * 注意：instant 会忽略延时，但不会忽略采样率
   */
  instant?: boolean;
}

/**
 * sls log 方法额外参数
 */
export interface ILogOptions extends ILogOptionsQuick {
  group?: string;
}

export interface IFnLogQuick {
  (topic: string): void;
  (topic: string, info: undefined | null, options: ILogOptionsQuick): void;
  <I>(topic: string, info: I, options?: ILogOptionsQuick): void;
}

export interface IFnLog {
  (topic: string): void;
  (topic: string, info: undefined | null, options: ILogOptionsQuick): void;
  <I>(topic: string, info: I, options?: ILogOptionsQuick): void;
  debug: IFnLogQuick;
  log: IFnLogQuick;
  info: IFnLogQuick;
  warn: IFnLogQuick;
  error: IFnLogQuick;
  fatal: IFnLogQuick;
  biz: IFnLogQuick;
}

export interface IFnFactory {
  (options: IFactoryOptions): IFnLog;
}

export interface ILogInfo {
  __topic__: string;
  [k: string]: unknown;
}

export interface ILogPostBody {
  __topic__: string;
  __logs__: Record<string, string>[];
  // __source__?: string;
  // __tags__?: Record<string, string>;
}
