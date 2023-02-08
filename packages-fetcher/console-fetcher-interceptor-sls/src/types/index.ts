import {
  FactoryOptions
} from '@alicloud/console-logger-sls';

export interface IFetcherInterceptorConfig {
  slsOptions?: FactoryOptions;
  topicSuccess?: string;
  topicError?: string;
}

export interface IFetcherResponseData {
  requestId?: string;
}

export interface ISlsInfo {
  fetcherMethod?: string;
  fetcherUrl?: string;
  fetcherUrlBase?: string;
  fetcherParams?: unknown;
  fetcherBody?: unknown;
  requestId?: string;
  errorName: string;
  errorCode: string;
  errorMessage: string;
  /*
   * 记录鹰眼 ID，对于 CORS 的请求，需要服务端在 Response 的 header 中加上 `Access-Control-Expose-Headers: Eagleeye-Traceid` 或 `Access-Control-Expose-Headers: *`
   * 具体参考 https://javascript.info/fetch-crossorigin#response-headers
   */
  eagleEyeTraceId?: string;
}
