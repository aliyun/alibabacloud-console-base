import {
  Fetcher
} from '@alicloud/fetcher';

import {
  ETypeApi
} from '../enum';
import {
  MULTI_TYPES
} from '../const';
import {
  IConsoleFetcherConfig,
  IFnConsoleApi,
  IConsoleApiOptions,
  IConsoleApiMultiAction,
  TConsoleApiMultiResult,
  IFnConsoleApiMulti
} from '../types';
import {
  getApiUrl,
  callApi,
  callApiMulti
} from '../util';

function createApi(fetcher: Fetcher<IConsoleFetcherConfig>, type: ETypeApi.OPEN | ETypeApi.INNER | ETypeApi.CONTAINER): IFnConsoleApi;
function createApi(fetcher: Fetcher<IConsoleFetcherConfig>, type: ETypeApi.OPEN_MULTI): IFnConsoleApiMulti;

function createApi(fetcher: Fetcher<IConsoleFetcherConfig>, type: ETypeApi): IFnConsoleApi | IFnConsoleApiMulti {
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
