interface IBizJson<T = void> {
    code?: string;
    message?: string;
    data?: T;
}
/**
 * 专门用于 demo 的 biz 拦截器
 *
 * 使用 `fetcher.interceptResponse(fetcherDemoInterceptorBiz)`
 */
export default function fetcherDemoInterceptorBiz(json: IBizJson, config: unknown): unknown;
export {};
