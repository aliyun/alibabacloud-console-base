import {
  EErrorSpecial
} from '../enum';
import {
  TFnVoid,
  IInterceptorQueueItem,
  IFetcherConfig,
  IFetcherResponse,
  IFetcherError,
  IFnInterceptRequest,
  IFnInterceptResponseFulfilled,
  IFnInterceptResponseRejected,
  TArgsForInterceptRequest,
  TArgsForInterceptResponse,
  IFetcherErrorSpecial
} from '../types';
import {
  fetchX,
  mergeConfig,
  convertError,
  parseInterceptorQueueItemForRequest,
  parseInterceptorQueueItemForResponse,
  queueInterceptor,
  filterAndSortInterceptors
} from '../util';
import requestInterceptorFirst from '../interceptors/request/first';
import requestInterceptorLast from '../interceptors/request/last';

/**
 * 一个允许添加 request 和 response 拦截器的 Fetcher 类，有些类似 axios，但有所不同：
 * 
 * 1. 拦截方法更直接：`interceptRequest/interceptResponse`，而不是 `axios.interceptors.request|response.use()`
 * 2. 解除拦截只需要记住以上两个方法返回的无参方法即可（在 react 的 useEffect hooks 下特别方便），而不是 `axios.interceptors.request|response.eject()`
 * 3. `interceptRequest` 仅接受一个方法，而 `interceptResponse` 可以接受两个（跟 axios 类似）
 * 4. `interceptRequest` 的顺序和最终调用的顺序一致，而 axios 的顺序是倒着来的
 * 5. `interceptRequest` 如果抛错，不会触发真实的 API 请求（axios 一样），也不会触发任何 response interceptors（axios 会触发）
 * 6. `interceptRequest` 可以不必返回全的 fetcherConfig，这里会自动 merge，axios 要求返回全的
 */
export default class Fetcher<C extends IFetcherConfig = IFetcherConfig> {
  private readonly _defaultConfig: C;
  
  private _interceptorRequestSealed = false;
  
  private _interceptorResponseSealed = false;
  
  private _interceptorQueueForRequest: IInterceptorQueueItem<IFnInterceptRequest<C>>[] = [];
  
  private _interceptorQueueForResponse: IInterceptorQueueItem<IFnInterceptResponseFulfilled<C>, IFnInterceptResponseRejected<C>>[] = [];
  
  /**
   * 传递给 interceptor，这样在 interceptor 内部有需要的话可以通过它加上 fetcherConfig 进行重新请求
   */
  private _handleRequest = (fetcherConfig: C): Promise<any> => this.request<any>(fetcherConfig);
  
  constructor(fetcherConfig?: C) {
    this._defaultConfig = {
      ...fetcherConfig
    } as C;
  }
  
  /**
   * 获取此次调用需要用到的所有请求拦截器，且拦截器的顺序按指定顺序
   */
  private _getInterceptorsForRequest(fetcherConfig: C): IFnInterceptRequest<C>[] {
    const unsorted: IInterceptorQueueItem<IFnInterceptRequest<C>>[] = [...this._interceptorQueueForRequest];
    
    if (fetcherConfig.additionalInterceptorsForRequest) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fetcherConfig.additionalInterceptorsForRequest.forEach(v => unsorted.push(parseInterceptorQueueItemForRequest<C>(v as TArgsForInterceptRequest<C>)));
    }
    
    return [
      requestInterceptorFirst as unknown as IFnInterceptRequest<C>,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...filterAndSortInterceptors<IFnInterceptRequest<C>>(unsorted).map(v => v.fulfilledFn),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      requestInterceptorLast as unknown as IFnInterceptRequest<C>
    ];
  }
  
  private _getInterceptorsForResponse(fetcherConfig: C): [IFnInterceptResponseFulfilled<C>, IFnInterceptResponseRejected<C>][] {
    const unsorted: IInterceptorQueueItem<IFnInterceptResponseFulfilled<C>, IFnInterceptResponseRejected<C>>[] = [...this._interceptorQueueForResponse];
    
    if (fetcherConfig.additionalInterceptorsForResponse) {
      fetcherConfig.additionalInterceptorsForResponse.forEach(v => unsorted.push(parseInterceptorQueueItemForResponse<C>(v as TArgsForInterceptResponse<C>)));
    }
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return filterAndSortInterceptors<IFnInterceptResponseFulfilled<C>, IFnInterceptResponseRejected<C>>(unsorted).map(v => [v.fulfilledFn, v.rejectedFn]);
  }
  
  /**
   * 逐个调用排序好的请求拦截器，每个拦截器可以返回部分期望修改的 fetcherConfig（也可以不返回任何东西），最终得到的是合并完的 fetcherConfig 对象
   */
  private _invokeInterceptorsForRequest(fetcherConfig: C): Promise<C> {
    let promise: Promise<C> = Promise.resolve(fetcherConfig);
    
    this._getInterceptorsForRequest(fetcherConfig).forEach(fn => {
      promise = promise.then((configLastMerged: C) => { // 上一次 merge 完的结果
        // 利用前置 Promise，不管 fn 返回是否 Promise 都可以在一个运行空间获取到 configLastMerged 和 configToMerge
        // configToMerge 是 fn 计算后得到的结果，可能为空；也可能是 Promise
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return Promise.resolve().then(() => fn(configLastMerged, this._handleRequest)).then((configToMerge: Partial<C>) => mergeConfig(configLastMerged, configToMerge));
      });
    });
    
    return promise;
  }
  
  /**
   * 对执行请求返回得到的结果（正确返回或错误）进行后期处理
   */
  private async _invokeInterceptorsForResponse<T>(fetcherConfig: C, fetcherResponse?: IFetcherResponse<T>, error?: IFetcherError<C>): Promise<T> {
    let promise: Promise<T>;
    
    if (fetcherResponse) {
      promise = Promise.resolve(fetcherResponse.data);
    } else {
      promise = Promise.reject(error);
    }
    
    // 逐个调用响应拦截器，如果有 success 则其返回将作为结果传递给下一个拦截器
    this._getInterceptorsForResponse(fetcherConfig).forEach(([fulfilledFn, rejectedFn]) => {
      promise = promise.then((result: T) => {
        if (fulfilledFn) {
          return fulfilledFn(result, fetcherConfig, fetcherResponse!, this._handleRequest);
        }
        
        return result;
      }, (err: IFetcherError<C>) => {
        /**
         * 如果继续 throw 则 promise 继续 reject，如果不 throw 则 promise 将 resolve
         * 所以这里提供了「纠错」和「调整错误」两个功能
         */
        if (rejectedFn) {
          return rejectedFn(err, fetcherConfig, fetcherResponse, this._handleRequest);
        }
        
        throw err;
      }).catch((err2: IFetcherError<C>) => {
        if (!err2.config) {
          err2.config = fetcherConfig;
        }
        
        if (fetcherResponse?.data && !err2.responseData) {
          err2.responseData = fetcherResponse.data;
        }
        
        throw err2;
      });
    });
    
    return promise;
  }
  
  /**
   * 发送请求：前置请求拦截器 → 网络请求 → 后置响应拦截器
   */
  async request<T = void>(fetcherConfig: C): Promise<T> {
    // 1. 前置请求拦截器
    let finalConfig: C = mergeConfig(this._defaultConfig, fetcherConfig);
    
    try {
      finalConfig = await this._invokeInterceptorsForRequest(finalConfig);
    } catch (err) {
      if (!err) { // 在 JS 里可以 throw undefined
        throw err;
      }
      
      if ((err as Error).name === EErrorSpecial.SKIP_NETWORK) { // 绕过请求，直接返回
        return (err as IFetcherErrorSpecial<T>).result;
      }
      
      throw convertError(err as Error, finalConfig); // 继续错下去
    }
    
    // 2. 网络请求
    let fetcherResponse: IFetcherResponse<T> | undefined;
    let error: IFetcherError<C> | undefined;
    
    try {
      fetcherResponse = await fetchX<T, C>(finalConfig);
    } catch (err) {
      error = convertError<C>(err as Error, finalConfig);
    }
    
    // 3. 后置响应拦截器
    return this._invokeInterceptorsForResponse<T>(finalConfig, fetcherResponse, error);
  }
  
  interceptRequest(fn: IFnInterceptRequest<C>): TFnVoid;
  
  interceptRequest(priority: number, fn: IFnInterceptRequest<C>): TFnVoid;
  
  /**
   * 添加「预设」请求拦截器，返回解除拦截的无参方法
   */
  interceptRequest(...args: TArgsForInterceptRequest<C>): TFnVoid {
    if (this._interceptorRequestSealed) {
      throw new Error('[Fetcher#interceptRequest] Cannot add more interceptors. You need to unseal it first.');
    }
    
    return queueInterceptor<IInterceptorQueueItem<IFnInterceptRequest<C>>>(this._interceptorQueueForRequest, parseInterceptorQueueItemForRequest<C>(args));
  }
  
  interceptResponse(fulfilledFn?: IFnInterceptResponseFulfilled<C>, rejectedFn?: IFnInterceptResponseRejected<C>): TFnVoid;
  
  interceptResponse(priority: number, fulfilledFn?: IFnInterceptResponseFulfilled<C>, rejectedFn?: IFnInterceptResponseRejected<C>): TFnVoid;
  
  /**
   * 添加「预设」响应拦截器，返回解除拦截的无参方法
   */
  interceptResponse(...args: TArgsForInterceptResponse<C>): TFnVoid {
    if (this._interceptorResponseSealed) {
      throw new Error('[Fetcher#interceptResponse] Cannot add more interceptors. You need to unseal it first.');
    }
    
    return queueInterceptor<IInterceptorQueueItem<IFnInterceptResponseFulfilled<C>, IFnInterceptResponseRejected<C>>>(this._interceptorQueueForResponse, parseInterceptorQueueItemForResponse<C>(args));
  }
  
  /**
   * 对于「开箱即用」的 fetcher，因为它是会被复用的单例，所以一般不希望它的拦截器被扩展，如果还是坚持要扩展，需要手动解除
   */
  sealInterceptors(requestSealed = true, responseSealed = true): void {
    this._interceptorRequestSealed = requestSealed;
    this._interceptorResponseSealed = responseSealed;
  }
  
  /**
   * 供本地 debug 查看
   */
  inspectInterceptors(): void {
    // eslint-disable-next-line no-console
    console.info({
      request: this._interceptorQueueForRequest,
      response: this._interceptorQueueForResponse
    });
  }
}
