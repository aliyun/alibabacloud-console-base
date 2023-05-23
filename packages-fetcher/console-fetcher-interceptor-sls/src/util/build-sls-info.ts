import {
  FetcherError,
  FetcherConfig,
  FetcherResponse
} from '@alicloud/fetcher';

import {
  IFetcherResponseData
} from '../types';

import flattenConfig from './flatten-config';
import flattenError from './flatten-error';

export default function buildSlsInfo(err: FetcherError | undefined, fetcherConfig: FetcherConfig, response?: FetcherResponse<IFetcherResponseData | null>): Record<string, unknown> {
  return {
    ...flattenConfig(fetcherConfig),
    ...err ? flattenError(err) : undefined,
    requestId: err?.requestId || response?.data?.requestId,
    /*
     * 记录鹰眼 ID，对于 CORS 的请求，需要服务端在 Response 的 header 中加上 `Access-Control-Expose-Headers: Eagleeye-Traceid` 或 `Access-Control-Expose-Headers: *`
     * 具体参考 https://javascript.info/fetch-crossorigin#response-headers
     */
    eagleEyeTraceId: response?.headers['Eagleeye-Traceid']
  };
}
