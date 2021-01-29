import {
  IFetcherConfig,
  TArgsForPost,
  TFetcherOptionsForQuickFn
} from '../types';
import Fetcher from '../fetcher';

import mergeConfig from './merge-config';

/**
 * 用于执行带 body 的请求，对应点 method 有 'POST' / 'PUT' / 'PATCH'
 */
export default function requestWithBody<C extends IFetcherConfig, T, B, P>(fetcher: Fetcher<C>, method: string, args: TArgsForPost<C, B, P>): Promise<T> {
  let options: TFetcherOptionsForQuickFn<C> | undefined;
  let url: string;
  let body: B | undefined;
  let params: P | undefined;
  
  if (typeof args[0] === 'string') {
    [url, body, params] = args as [string, B, P];
  } else {
    [options, url, body, params] = args as [TFetcherOptionsForQuickFn<C>, string, B, P];
  }
  
  return fetcher.request<T>(mergeConfig<C>(options as C, {
    url,
    method,
    params,
    body
  } as C));
}
