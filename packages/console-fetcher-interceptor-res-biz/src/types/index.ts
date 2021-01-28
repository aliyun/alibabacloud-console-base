import {
  FetcherConfig
} from '@alicloud/fetcher';

export type TIsSuccess = ((o: any) => boolean) | boolean; // eslint-disable-line @typescript-eslint/no-explicit-any

export type TGetData = ((o: any) => any) | string; // eslint-disable-line @typescript-eslint/no-explicit-any

export type TGetCode = ((o: any) => string) | string; // eslint-disable-line @typescript-eslint/no-explicit-any

export type TGetMessage = ((o: any) => string) | string; // eslint-disable-line @typescript-eslint/no-explicit-any

export interface IBizJson<T = void> {
  code?: string;
  message?: string;
  data?: T;
}

export interface IFetcherConfigExtra {
  /**
   * 判断请求是否成功，默认判断 `json.code === '200' || json.code === 200`
   * 
   * - `boolean` 直接成功或失败
   * - `(json: any) => boolean` 根据原始 json 对象进行自定义判断
   */
  isSuccess?: TIsSuccess;
  /**
   * 提取最终需要的数据，默认 `json.data`
   * 
   * - `string` 自定义数据字段，如 `'DATA'` 则表示获取 `json.DATA`
   * - `(json: any) => any` 从原始 json 对象进行自定义提取
   */
  getData?: TGetData;
  /**
   * 当 `isSuccess` 判定为失败时，从数据中提取错误 code，默认 `json.code`
   * 
   * - `string` 自定义数据字段，如 `'DATA'` 则表示获取 `json.DATA`
   * - `(json: any) => any` 从原始 json 对象进行自定义提取
   */
  getCode?: TGetCode;
  /**
   * 当 `isSuccess` 判定为失败时，从数据中提取错误 message，默认 `json.message`
   * 
   * - `string` 自定义数据字段，如 `'MESSAGE'` 则表示获取 `json.MESSAGE`
   * - `(json: any) => any` 从原始 json 对象进行自定义提取
   */
  getMessage?: TGetMessage;
}

export interface IFetcherConfigExtended extends FetcherConfig, IFetcherConfigExtra {}
