import { FetcherConfig, FetcherFnInterceptResponseRejected } from '@alicloud/fetcher';
interface IFetcherConfig extends FetcherConfig {
    tokenRefreshed?: boolean;
}
/**
 * 处理 FECS 的返回，如果抛错说 TOKEN 错误，则刷新 token 并重新再请求一次
 */
export default function createInterceptorRes(): FetcherFnInterceptResponseRejected<IFetcherConfig>;
export {};
