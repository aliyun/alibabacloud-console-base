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
    eagleEyeTraceId: response?.headers['Eagleeye-Traceid']
  };
}