import {
  IFetcher,
  IFetcherConfig,
  TArgsForJsonp,
  TArgsForGet,
  TArgsForPost
} from '../types';
import Fetcher from '../fetcher';
import requestWithNoBody from '../util/request-with-no-body';
import requestWithBody from '../util/request-with-body';

/**
 * 这里会创建 Fetcher 实例，但不会直接把实例返回，因为那样的话用起来会不舒服（方法无法脱离实例进行调用），
 * 所以这里实际上是返回了一组方法组合成的一个对象。
 */
export default function createFetcher<C extends IFetcherConfig = IFetcherConfig>(fetcherConfig?: C): IFetcher<C> {
  const fetcher = new Fetcher<C>(fetcherConfig);
  
  const interceptRequest = fetcher.interceptRequest.bind(fetcher);
  const interceptResponse = fetcher.interceptResponse.bind(fetcher);
  const sealInterceptors = fetcher.sealInterceptors.bind(fetcher);
  const request = fetcher.request.bind(fetcher);
  
  // 便捷方法
  const jsonp = <T = void, P = void>(...args: TArgsForJsonp<C, P>): Promise<T> => requestWithNoBody<C, T, P>(fetcher, 'JSONP', args);
  const get = <T = void, P = void>(...args: TArgsForGet<C, P>): Promise<T> => requestWithNoBody<C, T, P>(fetcher, 'GET', args);
  const deleteFn = <T = void, B = void, P = void>(...args: TArgsForPost<C, B, P>): Promise<T> => requestWithBody<C, T, B, P>(fetcher, 'POST', args);
  const post = <T = void, B = void, P = void>(...args: TArgsForPost<C, B, P>): Promise<T> => requestWithBody<C, T, B, P>(fetcher, 'POST', args);
  const put = <T = void, B = void, P = void>(...args: TArgsForPost<C, B, P>): Promise<T> => requestWithBody<C, T, B, P>(fetcher, 'PUT', args);
  const patch = <T = void, B = void, P = void>(...args: TArgsForPost<C, B, P>): Promise<T> => requestWithBody<C, T, B, P>(fetcher, 'PATCH', args);
  
  return {
    interceptRequest,
    interceptResponse,
    sealInterceptors,
    request,
    jsonp,
    get,
    delete: deleteFn,
    post,
    put,
    patch
  };
}
