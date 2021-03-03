import {
  IStringifyOptions
} from 'qs';

import {
  FetchOptions
} from '@alicloud/fetcher-fetch';
import {
  JsonpOptions
} from '@alicloud/fetcher-jsonp';

import {
  EErrorSpecial
} from '../const';

type TQuickMethodConfigExclusion = 'url' | 'method';

/**
 * 表示 `() => void` 类型
 */
export type TFnVoid = () => void;

export interface IFetcherBuildUrlOptions {
  urlBase?: string;
  urlCacheBusting?: boolean;
  params?: Record<string, unknown> | string;
  serializeOptions?: IStringifyOptions;
}

/**
 * interceptor 的 config 参数，也是 Fetcher.prototype.request 的参数
 * 
 * `_` 打头的是 fetcher 自己填入的，传入也没用
 */
export interface IFetcherConfig extends Omit<FetchOptions, 'method' | 'headers' | 'body'>, JsonpOptions {
  /**
   * 根据 method、url、params、body 计算得到的 id，可以被拦截器使用，比如缓存、合并时需要
   */
  _id?: string;
  /**
   * 创建时间
   */
  _timeCreated?: number;
  /**
   * 真正开始请求的时间，由最末一个 interceptor 计入，便于需要记录耗时的场景
   */
  _timeStarted?: number;
  /**
   * - 支持除了标准 HTTP 请求的 GET/POST/DELETE/PUT/PATCH + JSONP
   * - 大小写无关，但内部一开始就会转成大写，建议统一用大写
   * - 不要手动调用 HEADER/OPTIONS
   * 
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
   */
  method?: string;
  /**
   * config 中需要有 url
   */
  url?: string;
  /**
   * 如果指定 `urlBase` 且 `url` 不是绝对路径，会将两者拼接起来
   */
  urlBase?: string;
  /**
   * 是否在 url 上拼接 `_cache_busting_` 参数
   */
  urlCacheBusting?: boolean;
  /**
   * 约束 FetchOptions.headers
   */
  headers?: Record<string, string | number | boolean>;
  /**
   * url 上的 search 参数，会跟已有的参数合并
   * 纯的 fetch/jsonp 的 url 要求是已经拼接好参数的 url
   * 
   * `{ url: '/url', params: { a: 1, b: 2} }` 等价于 `{ url: '/url', params: 'a=1&b=2' }` 等价于 `{ url: '/url?a=1&b=2' }`
   */
  params?: Record<string, unknown> | string | null;
  /**
   * 约束 FetchOptions.body
   */
  body?: Record<string, unknown> | string | null;
  /**
   * 如果传入的 params 是对象，如何用 qs 来序列化它
   */
  paramsSerializeOptions?: IStringifyOptions;
  /**
   * 自定义 body 的 serialize
   */
  bodySerializeOptions?: IStringifyOptions;
  /**
   * 调用时临时增加的请求拦截器，不至于影响到整个实例
   */
  additionalInterceptorsForRequest?: TArgsForInterceptRequest[]; // eslint-disable-line @typescript-eslint/no-use-before-define
  /**
   * 调用时临时增加的响应拦截器，不至于影响到整个实例
   */
  additionalInterceptorsForResponse?: TArgsForInterceptResponse[]; // eslint-disable-line @typescript-eslint/no-use-before-define
}

/**
 * 将 fetch 和 jsonp 各自的 response 同化后的类型，剔除 fetch Response 中不关心的部分（body、bodyUsed、ok、
 * redirected、status、statusText、type 等），提取 `.json()` 后 resolve 了的数据
 */
export interface IFetcherResponse<T = void> {
  readonly url: string;
  readonly headers: Record<string, string>;
  readonly data: T;
}

/**
 * 错误类型
 */
export interface IFetcherError<C extends IFetcherConfig = IFetcherConfig> extends Error {
  config: C;
  code?: string; // 为了后边的扩展需要
  responseData?: unknown; // 如果强行把返回变成出错，则需要记录最原始的 response 中的数据
}

/**
 * 错误类型
 */
export interface IFetcherError<C extends IFetcherConfig = IFetcherConfig> extends Error {
  config: C;
  code?: string; // 为了后边的扩展需要
  responseData?: unknown; // 如果强行把返回变成出错，则需要记录最原始的 response 中的数据
}

/**
 * 特殊错误，用于绕过网络请求
 */
export interface IFetcherErrorSpecial<T = void, C extends IFetcherConfig = IFetcherConfig> extends Error {
  name: EErrorSpecial;
  config?: C;
  result: T | Promise<T>;
}

/**
 * 便捷 JSONP 方法，如果第一个参数为对象，则为 options
 */
export type TFetcherOptionsForQuickJsonp<C extends IFetcherConfig = IFetcherConfig> = Omit<C, TQuickMethodConfigExclusion>;

/**
 * 其他便捷方法，如果第一个参数为对象，则为 options
 */
export type TFetcherOptionsForQuickFn<C extends IFetcherConfig = IFetcherConfig> = Omit<C, TQuickMethodConfigExclusion | keyof JsonpOptions>;

/**
 * 执行请求的方法定义
 */
export interface IFnFetcherRequest<C extends IFetcherConfig = IFetcherConfig> {
  <T = void>(fetcherConfig: C): Promise<T>;
}

/**
 * 快捷方法定义 - JSONP
 * 
 * ```js
 * jsonp(url); // 无参调用
 * jsonp(url, params); // 有参调用
 * jsonp({ // 自定义额外配置，但无法覆盖 method
 *   timeout,
 *   charset,
 *   jsonpCallback,
 *   jsonpCallbackFunction
 * }, url, params);
 * ```
 */
export interface IFnFetcherJsonp<C extends IFetcherConfig = IFetcherConfig> {
  <T = void, P = void>(url: string, params?: P): Promise<T>;
  <T = void, P = void>(options: TFetcherOptionsForQuickJsonp<C>, url: string, params?: P): Promise<T>;
}

/**
 * 快捷方法定义 - 类 GET
 * 
 * @example
 * 
 * ```js
 * get(url); // 无参调用
 * get(url, params); // 有参调用
 * get({ // 自定义额外配置，但无法覆盖 method
 *   headers: { ... },
 *   timeout: 1234
 * }, url, params);
 * ```
 */
export interface IFnFetcherGetAlike<C extends IFetcherConfig = IFetcherConfig> {
  <T = void, P = void>(url: string, params?: P): Promise<T>;
  <T = void, P = void>(options: TFetcherOptionsForQuickFn<C>, url: string, params?: P): Promise<T>;
}

/**
 * 快捷方法定义 - 类 POST
 * 
 * @example
 * 
 * ```js
 * post(url); // 无参调用
 * post(url, body); // 有参调用（仅 body）
 * post(url, body, params); // 有参调用，body 和 url 参数
 * post({ // 自定义额外配置，但无法覆盖 method
 *   headers: { ... },
 *   timeout: 1234
 * }, url, body, params);
 * ```
 */
export interface IFnFetcherPostAlike<C extends IFetcherConfig = IFetcherConfig> {
  <T = void, B = void, P = void>(url: string, body?: B, params?: P): Promise<T>;
  <T = void, B = void, P = void>(options: TFetcherOptionsForQuickFn<C>, url: string, body?: B, params?: P): Promise<T>;
}

export type TFetcherInterceptRequestReturn<C extends IFetcherConfig = IFetcherConfig> = void | Partial<C> | Promise<void | Partial<C>>

/**
 * request interceptor 方法类型
 */
export interface IFnInterceptRequest<C extends IFetcherConfig = IFetcherConfig> {
  (fetcherConfig: C, request: IFnFetcherRequest<C>): TFetcherInterceptRequestReturn<C>;
}

/**
 * response success interceptor 方法类型
 *  - C - fetcherConfig 类型
 *  - T - 最终需要返回的 Promise 类型
 *  - D - 接口实际返回的 Promise 类型
 */
export interface IFnInterceptResponseFulfilled<C extends IFetcherConfig = IFetcherConfig, T = any, D = T> {
  (data: D, fetcherConfig: C, fetcherResponse: IFetcherResponse<T>, fetcherRequest: IFnFetcherRequest<C>): T;
}

/**
 * response error interceptor 方法类型
 */
export interface IFnInterceptResponseRejected<C extends IFetcherConfig = IFetcherConfig, T = any> {
  (error: IFetcherError, fetcherConfig: C, fetcherResponse: IFetcherResponse<T> | undefined, fetcherRequest: IFnFetcherRequest<C>): T;
}

export interface IFetcher<C extends IFetcherConfig = IFetcherConfig> {
  interceptRequest(fulfilledFn: IFnInterceptRequest<C>): TFnVoid;
  interceptRequest(priority: number, fulfilledFn: IFnInterceptRequest<C>): TFnVoid;
  interceptResponse(fulfilledFn?: IFnInterceptResponseFulfilled<C>, rejectedFn?: IFnInterceptResponseRejected<C>): TFnVoid;
  interceptResponse(priority: number, fulfilledFn?: IFnInterceptResponseFulfilled<C>, rejectedFn?: IFnInterceptResponseRejected<C>): TFnVoid;
  sealInterceptors(requestSealed?: boolean, responseSealed?: boolean): void;
  request: IFnFetcherRequest<C>;
  jsonp: IFnFetcherJsonp<C>;
  get: IFnFetcherGetAlike<C>;
  delete: IFnFetcherPostAlike<C>;
  post: IFnFetcherPostAlike<C>;
  put: IFnFetcherPostAlike<C>;
  patch: IFnFetcherPostAlike<C>;
}

export type TArgsForInterceptRequest<C extends IFetcherConfig = IFetcherConfig> = [IFnInterceptRequest<C>] | [number, IFnInterceptRequest<C>];
export type TArgsForInterceptResponse<C extends IFetcherConfig = IFetcherConfig> = [
  IFnInterceptResponseFulfilled<C>?, IFnInterceptResponseRejected<C>?
] | [
  number, IFnInterceptResponseFulfilled<C>?, IFnInterceptResponseRejected<C>?
];

export type TArgsForJsonp<C extends IFetcherConfig = IFetcherConfig, P = void> = [string, P?] | [TFetcherOptionsForQuickJsonp<C>, string, P?];
export type TArgsForGet<C extends IFetcherConfig = IFetcherConfig, P = void> = [string, P?] | [TFetcherOptionsForQuickFn<C>, string, P?];
export type TArgsForPost<C extends IFetcherConfig = IFetcherConfig, B = void, P = void> = [string, B?, P?] | [TFetcherOptionsForQuickFn<C>, string, B?, P?];
