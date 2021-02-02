import {
  IFetcherConfig,
  TArgsForJsonp,
  TArgsForGet,
  TFetcherOptionsForQuickFn
} from '../types';
import mergeConfig from '../util/merge-config';
import Fetcher from '../fetcher';

/**
 * 用于执行不带 body 的请求，对应点 method 有 'GET' / 'DELETE' / 'HEAD' / 'OPTIONS' / 'JSONP'
 */
export default function requestWithNoBody<C extends IFetcherConfig, T = void, P = void>(fetcher: Fetcher<C>, method: string, args: TArgsForJsonp<C, P> | TArgsForGet<C, P>): Promise<T> {
  let options: TFetcherOptionsForQuickFn<C> | undefined;
  let url: string;
  let params: P | undefined;
  
  if (typeof args[0] === 'string') {
    [url, params] = args as [string, P?];
  } else {
    [options, url, params] = args as [TFetcherOptionsForQuickFn<C>, string, P?];
  }
  
  return fetcher.request<T>(mergeConfig<C>(options as C, {
    url,
    method,
    params
  } as C));
}
