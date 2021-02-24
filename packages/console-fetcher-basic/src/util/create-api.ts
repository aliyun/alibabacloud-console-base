import {
  FetcherFnPost
} from '@alicloud/fetcher';

import {
  ETypeApi
} from '../const';
import {
  IConsoleFetcherConfig,
  IFnConsoleApi,
  IConsoleApiBody,
  IConsoleApiOptions
} from '../types';

import buildUrlForDebugPurpose from './build-url-for-debug-purpose';

function getApiUrl(type: ETypeApi): string {
  switch (type) {
    case ETypeApi.OPEN:
      return '/data/api.json';
    case ETypeApi.INNER:
      return '/data/innerApi.json';
    case ETypeApi.CONTAINER:
      return '/data/call.json';
    default:
      throw new Error(`OneAPI type ${type} not supported!`);
  }
}

export default function createApi(fetcherPost: FetcherFnPost<IConsoleFetcherConfig>, type: ETypeApi): IFnConsoleApi {
  const url = getApiUrl(type);
  
  return function<T = void, P = void, R = void>(product: string, action: string, params?: P, {
    region,
    roa,
    ...options
  }: IConsoleApiOptions<R> = {}): Promise<T> {
    const body: IConsoleApiBody = {
      product,
      action
    };
    
    if (params) {
      body.params = JSON.stringify(params);
    }
    
    if (region) {
      body.region = region;
    }
    
    if (roa) {
      body.content = JSON.stringify(roa); // ROA 形式的接口要在 body 中透传参数，参数名是 content...
    }
    
    return fetcherPost<T, IConsoleApiBody>(options, buildUrlForDebugPurpose(url, product, action), body);
  };
}
