import {
  FetcherFnInterceptResponseFulfilled,
  createFetcherError
} from '@alicloud/fetcher';

import {
  IBizJson,
  IFetcherConfigExtended
} from '../types';
import {
  ERROR_BIZ
} from '../const';

import isSuccess from './is-success';
import getData from './get-data';
import getCode from './get-code';
import getTitle from './get-title';
import getMessage from './get-message';
import getRequestId from './get-request-id';

/**
 * 请求到这里，说明服务端有返回，但业务上不一定是成功的。
 * 这里会判断业务是否成功，如果成功则返回从原屎返回中得出的真正的数据，如果失败在抛出 FetchErrorBiz。
 */
export default function createInterceptorResponseFulfilled(): FetcherFnInterceptResponseFulfilled<IFetcherConfigExtended> {
  return (json: IBizJson, fetcherConfig: IFetcherConfigExtended): any => { // eslint-disable-line @typescript-eslint/no-explicit-any
    const success = isSuccess(json, fetcherConfig.isSuccess);
    
    if (success) {
      return getData(json, fetcherConfig.getData);
    }
    
    const code: string = getCode(json, fetcherConfig.getCode) || '__UNKNOWN__';
    const message: string = getMessage(json, fetcherConfig.getMessage) || code;
    
    throw createFetcherError<IFetcherConfigExtended>(fetcherConfig, ERROR_BIZ, message, {
      code,
      title: getTitle(json, fetcherConfig.getTitle),
      requestId: getRequestId(json, fetcherConfig.getRequestId)
    });
  };
}
