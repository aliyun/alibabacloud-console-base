import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IConsoleFetcherConfig,
  IConsoleApiOptions,
  IConsoleApiMultiAction,
  TConsoleApiMultiResultLegacy,
  IConsoleApiBodyMulti
} from '../types';

import buildApiUrlWithDebug from './build-api-url-with-debug';
import fillBodyAndGetRestOptions from './fill-body-and-get-rest-options';

export default function callApiMultiLegacy(
    fetcher: Fetcher<IConsoleFetcherConfig>,
    url: string,
    product: string,
    actions: IConsoleApiMultiAction[],
    options?: IConsoleApiOptions
): Promise<TConsoleApiMultiResultLegacy> {
  const body: IConsoleApiBodyMulti = {
    product,
    actions: JSON.stringify(actions)
  };
  const restOptions = fillBodyAndGetRestOptions(body, options);
  
  return fetcher.post<TConsoleApiMultiResultLegacy, IConsoleApiBodyMulti>(restOptions, buildApiUrlWithDebug(url, product, actions.map(v => v.action)), body);
}
