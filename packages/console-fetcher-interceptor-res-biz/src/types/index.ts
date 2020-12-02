import {
  FetcherConfig
} from '@alicloud/fetcher';

export interface IBizJson<T = void> {
  code?: string;
  message?: string;
  data?: T;
}

export type BizIsSuccess = ((o: any) => boolean) | boolean; // eslint-disable-line @typescript-eslint/no-explicit-any

export type BizGetData = ((o: any) => any) | string; // eslint-disable-line @typescript-eslint/no-explicit-any

export type BizGetCode = ((o: any) => string) | string; // eslint-disable-line @typescript-eslint/no-explicit-any

export type BizGetMessage = ((o: any) => string) | string; // eslint-disable-line @typescript-eslint/no-explicit-any

/**
 * 给 FetcherConfig 的额外扩展
 */
export interface IFetcherConfigExtraBiz {
  /**
   * 判断请求是否成功，默认判断 `json.code === '200' || json.code === 200`
   * 
   * - `boolean` 直接成功或失败
   * - `(json: any) => boolean` 根据原始 json 对象进行自定义判断
   */
  isSuccess?: BizIsSuccess;
  /**
   * 提取最终需要的数据，默认 `json.data`
   * 
   * - `string` 自定义数据字段，如 `'DATA'` 则表示获取 `json.DATA`
   * - `(json: any) => any` 从原始 json 对象进行自定义提取
   */
  getData?: BizGetData;
  /**
   * 当 `isSuccess` 判定为失败时，从数据中提取错误 code，默认 `json.code`
   * 
   * - `string` 自定义数据字段，如 `'DATA'` 则表示获取 `json.DATA`
   * - `(json: any) => any` 从原始 json 对象进行自定义提取
   */
  getCode?: BizGetCode;
  /**
   * 当 `isSuccess` 判定为失败时，从数据中提取错误 message，默认 `json.message`
   * 
   * - `string` 自定义数据字段，如 `'MESSAGE'` 则表示获取 `json.MESSAGE`
   * - `(json: any) => any` 从原始 json 对象进行自定义提取
   */
  getMessage?: BizGetMessage;
}

/**
 * 扩展的 FetcherConfig
 */
export interface IFetcherConfigExtendedBiz extends FetcherConfig, IFetcherConfigExtraBiz {}
