import {
  FetcherConfig
} from '@alicloud/fetcher';

import {
  TGetCode,
  TGetData,
  TGetMessage,
  TGetRequestId,
  TIsSuccess
} from './common';

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
   * - `string` 自定义数据字段，如 `'CODE'` 则表示获取 `json.CODE`
   * - `(json: any) => any` 从原始 json 对象进行自定义提取
   */
  getCode?: TGetCode;
  /**
   * 当 `isSuccess` 判定为失败时，从数据中提取错误 requestId，默认 `json.requestId`
   *
   * - `string` 自定义数据字段，如 `'REQUEST_ID'` 则表示获取 `json.REQUEST_ID`
   * - `(json: any) => any` 从原始 json 对象进行自定义提取
   */
  getRequestId?: TGetRequestId;
  /**
   * 当 `isSuccess` 判定为失败时，从数据中提取错误 title，默认 `json.title`
   *
   * - `string` 自定义数据字段，如 `'TITLE'` 则表示获取 `json.TITLE`
   * - `(json: any) => string` 从原始 json 对象进行自定义提取
   */
  getTitle?: TGetMessage;
  /**
   * 当 `isSuccess` 判定为失败时，从数据中提取错误 message，默认 `json.message`
   *
   * - `string` 自定义数据字段，如 `'MESSAGE'` 则表示获取 `json.MESSAGE`
   * - `(json: any) => string` 从原始 json 对象进行自定义提取
   */
  getMessage?: TGetMessage;
}

export interface IFetcherConfigExtended extends FetcherConfig, IFetcherConfigExtra {}