import {
  FetcherError,
  createFetcherError
} from '@alicloud/fetcher';

import {
  IBizJson,
  IFetcherConfigExtended
} from '../types';
import {
  ERROR_BIZ
} from '../const';

import getCode from './get-code';
import getMessage from './get-message';
import getTitle from './get-title';
import getRequestId from './get-request-id';

export default function createFetcherErrorBiz(json: IBizJson, fetcherConfig: IFetcherConfigExtended): FetcherError {
  return createFetcherError<IFetcherConfigExtended>(fetcherConfig, ERROR_BIZ, getMessage(json, fetcherConfig.getMessage) || '', {
    code: getCode(json, fetcherConfig.getCode) || '__UNKNOWN__',
    title: getTitle(json, fetcherConfig.getTitle),
    requestId: getRequestId(json, fetcherConfig.getRequestId)
  });
}
