import {
  Fetcher
} from '@alicloud/fetcher';

import {
  ETypeApi
} from '../enum';
import {
  IConsoleFetcherConfig,
  IFnConsoleApi,
  IFnConsoleApiMulti,
  IFnConsoleApiMultiLegacy,
  IConsoleApiOptions,
  IConsoleApiMultiAction,
  TConsoleApiMultiResult,
  TConsoleApiMultiResultLegacy
} from '../types';

import getApiUrl from './get-api-url';
import callApi from './call-api';
import callApiMulti from './call-api-multi';
import callApiMultiLegacy from './call-api-multi-legacy';

function createApi(fetcher: Fetcher<IConsoleFetcherConfig>, type: ETypeApi.OPEN | ETypeApi.INNER | ETypeApi.CONTAINER): IFnConsoleApi;
function createApi(fetcher: Fetcher<IConsoleFetcherConfig>, type: ETypeApi.OPEN_MULTI): IFnConsoleApiMulti;
function createApi(fetcher: Fetcher<IConsoleFetcherConfig>, type: ETypeApi.OPEN_MULTI_LEGACY): IFnConsoleApiMultiLegacy;

function createApi(fetcher: Fetcher<IConsoleFetcherConfig>, type: ETypeApi): IFnConsoleApi | IFnConsoleApiMultiLegacy {
  const url = getApiUrl(type);
  
  switch (type) {
    case ETypeApi.OPEN_MULTI:
      return function apiMulti(product: string, actions: IConsoleApiMultiAction[], options?: IConsoleApiOptions): Promise<TConsoleApiMultiResult> {
        return callApiMulti(fetcher, url, product, actions, options);
      };
    case ETypeApi.OPEN_MULTI_LEGACY:
      return function apiMulti(product: string, actions: IConsoleApiMultiAction[], options?: IConsoleApiOptions): Promise<TConsoleApiMultiResultLegacy> {
        return callApiMultiLegacy(fetcher, url, product, actions, options);
      };
    default:
      return function api<T = void, P = void>(product: string, action: string, params?: P, options?: IConsoleApiOptions): Promise<T> {
        return callApi<T, P>(fetcher, url, product, action, params, options);
      };
  }
}

export default createApi;
