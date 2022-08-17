import {
  FactoryOptions
} from '@alicloud/console-logger-sls';
import {
  FetcherError
} from '@alicloud/fetcher';

export interface IFetcherInterceptorConfig extends FactoryOptions {
  topicError?: string;
  // 除了 logstore 之外，还可以指定不同环境下的 logstore，不指定则用一个 logstore
  logstoreDev?: string;
  logstoreDaily?: string;
  logstorePre?: string;
  // 默认会忽略 code 为 ConsoleNeedLogin 的错误，也可以添加统一的配置进行忽略
  shouldIgnore?(err: FetcherError): boolean;
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
