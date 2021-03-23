import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IConsoleFetcherConfig,
  IConsoleApiBody,
  IConsoleApiOptions
} from '../types';

import buildApiUrlWithDebug from './build-api-url-with-debug';
import fillBodyAndGetRestOptions from './fill-body-and-get-rest-options';

export default function callApi<T = void, P = void>(
    fetcher: Fetcher<IConsoleFetcherConfig>,
    url: string,
    product: string, action: string,
    params?: P,
    options?: IConsoleApiOptions
): Promise<T> {
  const body: IConsoleApiBody = {
    product,
    action
  };
  
  if (params) {
    body.params = typeof params === 'string' ? params : JSON.stringify(params);
  }
  
  const restOptions = fillBodyAndGetRestOptions(body, options);
  
  return fetcher.post<T, IConsoleApiBody>(restOptions, buildApiUrlWithDebug(url, product, action), body);
}
