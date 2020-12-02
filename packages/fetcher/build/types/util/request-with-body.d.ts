import { IFetcherConfig, TMethod, TArgsForPost } from '../types';
import Fetcher from '../fetcher';
/**
 * 用于执行带 body 的请求，对应点 method 有 'POST' / 'PUT' / 'PATCH'
 */
export default function requestWithBody<C extends IFetcherConfig, T, B, P>(fetcher: Fetcher<C>, method: TMethod, args: TArgsForPost<C, B, P>): Promise<T>;
