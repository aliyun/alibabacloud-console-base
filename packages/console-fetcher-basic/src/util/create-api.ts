import {
  FetcherFnPost,
  FetcherOptionsForQuickPost
} from '@alicloud/fetcher';

import {
  ETypeApi
} from '../const';
import {
  IConsoleFetcherConfig,
  IFnConsoleApi,
  IApiBody
} from '../types';

import composeApiUrl from './compose-api-url';

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
  
  return <T = void, P = void>(
    product: string,
    action: string,
    params?: P,
    options: FetcherOptionsForQuickPost<IConsoleFetcherConfig> = {}
  ): Promise<T> => fetcherPost<T, IApiBody>(options, composeApiUrl(url, product, action), {
    product,
    action,
    params: params ? JSON.stringify(params) : undefined
  });
}
