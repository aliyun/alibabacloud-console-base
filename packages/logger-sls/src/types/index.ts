export type TFnDefaultParams = () => Record<string, unknown>;

export type TDefaultParams = Record<string, unknown> | TFnDefaultParams;

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
   * APIVersion，不知所谓的参数，但必需，说是保留字段，
   * 默认 `0.6.0`（文档中的版本号）
   */
  apiVersion?: string;
  /**
   * 默认参数，避免每次都要传，可以是静态数据或产生动态数据的方法，这些参数可以覆盖自动记录的参数，
   * 但会被日志方法的第二个参数 `params` 中对应的字段覆盖
   */
  defaultParams?: TDefaultParams;
  /**
   * 真正开始记录日志的等待时间（默认 10000ms，即 10s），保证业务请求先行。
   * 网络请求一般在页面的一开始最密集，如果日志在这时上报会造成网络阻塞而产生性能问题。
   * 日志不是强需求，不能压过业务，要业务先行，方法是先积压着，等到时间到了，再把积压着的日志一起上报。
   * 等待时间之后，日志的上报就是即时的。
   */
  suppressTime?: number;
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
   * 默认遵循 suppressTime 的规定，但如果这条日志比较重要，是应用在初始化的时候发送的，
   * 需要拿它来算 PvUv 可以指定 instant 为 true
   */
  instant?: boolean;
}

/**
 * sls log 方法额外参数
 */
export interface ILogOptions extends ILogOptionsQuick {
  group?: string;
}

export interface IFnLog {
  <P = void>(topic: string, params?: P, options?: ILogOptions): void;
  debug<P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void;
  log<P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void;
  info<P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void;
  warn<P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void;
  error<P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void;
  fatal<P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void;
  biz<P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void;
}

export type TFnFactory = (options: IFactoryOptions) => IFnLog;
