import { IFetcherConfig, TMethod, TArgsForJsonp, TArgsForGet } from '../types';
import Fetcher from '../fetcher';
/**
 * 用于执行不带 body 的请求，对应点 method 有 'GET' / 'DELETE' / 'HEAD' / 'OPTIONS' / 'JSONP'
 */
export default function requestWithNoBody<C extends IFetcherConfig, T = void, P = void>(fetcher: Fetcher<C>, method: TMethod, args: TArgsForJsonp<C, P> | TArgsForGet<C, P>): Promise<T>;
