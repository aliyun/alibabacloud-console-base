import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IConsoleFetcherConfig,
  IConsoleApiOptions,
  IConsoleApiMultiAction,
  TConsoleApiMultiResult,
  IConsoleApiBodyMulti
} from '../types';

import buildApiUrlWithDebug from './build-api-url-with-debug';
import fillBodyAndGetRestOptions from './fill-body-and-get-rest-options';

export default function callApiMulti(
    fetcher: Fetcher<IConsoleFetcherConfig>,
    url: string,
    product: string,
    actions: IConsoleApiMultiAction[],
    options?: IConsoleApiOptions
): Promise<TConsoleApiMultiResult> {
  const body: IConsoleApiBodyMulti = {
    product,
    actions: JSON.stringify(actions)
  };
  const restOptions = fillBodyAndGetRestOptions(body, options);
  
  return fetcher.post<TConsoleApiMultiResult, IConsoleApiBodyMulti>(restOptions, buildApiUrlWithDebug(url, product, actions.map(v => v.action)), body);
}
