import {
  FetcherFnPost,
  FetcherOptionsForQuickPost
} from '@alicloud/fetcher';

import {
  ETypeApi,
  MULTI_TYPES
} from '../const';
import {
  IConsoleFetcherConfig,
  IFnConsoleApi,
  IConsoleApiBody,
  IConsoleApiOptions,
  IConsoleApiMultiAction,
  TConsoleApiMultiResult,
  IConsoleApiBodyMulti,
  IFnConsoleApiMulti
} from '../types';

import getApiUrl from './get-api-url';
import buildParamsForDebug, {
  IParamsForDebug
} from './build-params-for-debug';

function fillBodyAndGetRestOptions(body: IConsoleApiBody | IConsoleApiBodyMulti, options?: IConsoleApiOptions): FetcherOptionsForQuickPost<IConsoleFetcherConfig> {
  if (!options) {
    return {};
  }
  
  const {
    region,
    roa,
    ...restOptions
  } = options;
  
  if (region) {
    body.region = region;
  }
  
  if (roa) {
    body.content = typeof roa === 'string' ? roa : JSON.stringify(roa); // ROA 形式的接口要在 body 中透传参数，参数名是 content...
  }
  
  return restOptions;
}

function createApi(fetcherPost: FetcherFnPost<IConsoleFetcherConfig>, type: ETypeApi.OPEN | ETypeApi.INNER | ETypeApi.CONTAINER): IFnConsoleApi;
function createApi(fetcherPost: FetcherFnPost<IConsoleFetcherConfig>, type: ETypeApi.OPEN_MULTI): IFnConsoleApiMulti;

function createApi(fetcherPost: FetcherFnPost<IConsoleFetcherConfig>, type: ETypeApi): IFnConsoleApi | IFnConsoleApiMulti {
  const url = getApiUrl(type);
  
  if (MULTI_TYPES.includes(type)) {
    return function callApiMulti(product: string, actions: IConsoleApiMultiAction[], options?: IConsoleApiOptions): Promise<TConsoleApiMultiResult> {
      const body: IConsoleApiBodyMulti = {
        product,
        actions: JSON.stringify(actions)
      };
      const restOptions = fillBodyAndGetRestOptions(body, options);
      
      return fetcherPost<TConsoleApiMultiResult, IConsoleApiBodyMulti, IParamsForDebug>(restOptions, url, body, buildParamsForDebug(product, actions.map(v => v.action)));
    };
  }
  
  return function callApi<T = void, P = void>(product: string, action: string, params?: P, options?: IConsoleApiOptions): Promise<T> {
    const body: IConsoleApiBody = {
      product,
      action
    };
    
    if (params) {
      body.params = typeof params === 'string' ? params : JSON.stringify(params);
    }
    
    const restOptions = fillBodyAndGetRestOptions(body, options);
    
    return fetcherPost<T, IConsoleApiBody, IParamsForDebug>(restOptions, url, body, buildParamsForDebug(product, action));
  };
}

export default createApi;
