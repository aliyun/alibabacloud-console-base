import { IFetcherConfig } from '../../types';
/**
 * request 最后一个拦截器，对 headers 和 credentials 做补充
 */
export default function requestInterceptorLast(config: IFetcherConfig): Partial<IFetcherConfig>;
