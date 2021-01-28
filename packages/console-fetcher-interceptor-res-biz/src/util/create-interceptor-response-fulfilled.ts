import {
  FetcherFnInterceptResponseFulfilled,
  FetcherUtils
} from '@alicloud/fetcher';

import {
  IBizJson,
  IFetcherConfigExtendedBiz
} from '../types';
import {
  ERROR_BIZ
} from '../const';

import isSuccess from './is-success';
import getCode from './get-code';
import getData from './get-data';
import getMessage from './get-message';

/**
 * 请求到这里，说明服务端有返回，但业务上不一定是成功的。
 * 这里会判断业务是否成功，如果成功则返回从原屎返回中得出的真正的数据，如果失败在抛出 FetchErrorBiz。
 */
export default function createInterceptorResponseFulfilled(): FetcherFnInterceptResponseFulfilled<IFetcherConfigExtendedBiz> {
  return (json: IBizJson, config: IFetcherConfigExtendedBiz): any => { // eslint-disable-line @typescript-eslint/no-explicit-any
    const success = isSuccess(json, config.isSuccess);
    
    if (success) {
      return getData(json, config.getData);
    }
    
    const code: string = getCode(json, config.getCode) || '__UNKNOWN__';
    const message: string = getMessage(json, config.getMessage) || code;
    
    throw FetcherUtils.createError<IFetcherConfigExtendedBiz>(config, ERROR_BIZ, message, code);
  };
}

