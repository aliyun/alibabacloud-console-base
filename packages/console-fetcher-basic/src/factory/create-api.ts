import {
  Fetcher
} from '@alicloud/fetcher';

import {
  ETypeApi,
  MULTI_TYPES
} from '../const';
import {
  IFnConsoleApi,
  IConsoleApiOptions,
  IConsoleApiMultiAction,
  TConsoleApiMultiResult,
  IFnConsoleApiMulti
} from '../types';
import getApiUrl from '../util/get-api-url';
import callApi from '../util/call-api';
import callApiMulti from '../util/call-api-multi';

function createApi(fetcher: Fetcher, type: ETypeApi.OPEN | ETypeApi.INNER | ETypeApi.CONTAINER): IFnConsoleApi;
function createApi(fetcher: Fetcher, type: ETypeApi.OPEN_MULTI): IFnConsoleApiMulti;

function createApi(fetcher: Fetcher, type: ETypeApi): IFnConsoleApi | IFnConsoleApiMulti {
  const url = getApiUrl(type);
  
  if (MULTI_TYPES.includes(type)) {
    return function apiMulti(product: string, actions: IConsoleApiMultiAction[], options?: IConsoleApiOptions): Promise<TConsoleApiMultiResult> {
      return callApiMulti(fetcher, url, product, actions, options);
    };
  }
  
  return function api<T = void, P = void>(product: string, action: string, params?: P, options?: IConsoleApiOptions): Promise<T> {
    return callApi<T, P>(fetcher, url, product, action, params, options);
  };
}

export default createApi;
