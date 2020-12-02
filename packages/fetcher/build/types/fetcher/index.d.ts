import { TFnVoid, IFetcherConfig, IFnInterceptRequest, IFnInterceptResponseFulfilled, IFnInterceptResponseRejected } from '../types';
/**
 * 一个允许添加 request 和 response 拦截器的 Fetcher 类，有些类似 axios，但有所不同：
 *
 * 1. 拦截方法更直接：`interceptRequest/interceptResponse`，而不是 `axios.interceptors.request|response.use()`
 * 2. 解除拦截只需要记住以上两个方法返回的无参方法即可（在 react 的 useEffect hooks 下特别方便），而不是 `axios.interceptors.request|response.eject()`
 * 3. `interceptRequest` 仅接受一个方法，而 `interceptResponse` 可以接受两个（跟 axios 类似）
 * 4. `interceptRequest` 的顺序和最终调用的顺序一致，而 axios 的顺序是倒着来的
 * 5. `interceptRequest` 如果抛错，不会触发真实的 API 请求（axios 一样），也不会触发任何 response interceptors（axios 会触发）
 * 6. `interceptRequest` 可以不必返回全的 config，这里会自动 merge，axios 要求返回全的
 */
export default class Fetcher<C extends IFetcherConfig = IFetcherConfig> {
    private readonly _defaultConfig;
    private _interceptorRequestSealed;
    private _interceptorResponseSealed;
    private _interceptorQueueForRequest;
    private _interceptorQueueForResponse;
    /**
     * 传递给 interceptor，这样在 interceptor 内部有需要的话可以通过它加上 config 进行重新请求
     */
    private _handleRequest;
    constructor(config?: C);
    /**
     * 获取此次调用需要用到的所有请求拦截器，且拦截器的顺序按指定顺序
     */
    private _getInterceptorsForRequest;
    private _getInterceptorsForResponse;
    /**
     * 逐个调用排序好的请求拦截器，每个拦截器可以返回部分期望修改的 config（也可以不返回任何东西），最终得到的是合并完的 config 对象
     */
    private _invokeInterceptorsForRequest;
    /**
     * 对执行请求返回得到的结果（正确返回或错误）进行后期处理
     */
    private _invokeInterceptorsForResponse;
    /**
     * 发送请求：前置请求拦截器 → 网络请求 → 后置响应拦截器
     */
    request<T = void>(config: C): Promise<T>;
    interceptRequest(fn: IFnInterceptRequest<C>): TFnVoid;
    interceptRequest(priority: number, fn: IFnInterceptRequest<C>): TFnVoid;
    interceptResponse(fulfilledFn?: IFnInterceptResponseFulfilled<C>, rejectedFn?: IFnInterceptResponseRejected<C>): TFnVoid;
    interceptResponse(priority: number, fulfilledFn?: IFnInterceptResponseFulfilled<C>, rejectedFn?: IFnInterceptResponseRejected<C>): TFnVoid;
    /**
     * 对于「开箱即用」的 fetcher，因为它是会被复用的单例，所以一般不希望它的拦截器被扩展，如果还是坚持要扩展，需要手动解除
     */
    sealInterceptors(requestSealed?: boolean, responseSealed?: boolean): void;
}
