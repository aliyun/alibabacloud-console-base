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

import buildParamsForDebug, {
  IParamsForDebug
} from './build-params-for-debug';
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
  
  return fetcher.post<TConsoleApiMultiResult, IConsoleApiBodyMulti, IParamsForDebug>(
      restOptions,
      url,
      body,
      buildParamsForDebug(product, actions.map(v => v.action))
  );
}
