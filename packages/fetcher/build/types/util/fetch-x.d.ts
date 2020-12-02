import { IFetcherConfig, IFetcherResponse } from '../types';
/**
 * 将 fetch 和 jsonp 整合在一起（即当 method 为 'JSONP' 的时候会发送 JSONP 请求）
 */
export default function fetchX<T = void, C extends IFetcherConfig = IFetcherConfig>(config: C): Promise<IFetcherResponse<T>>;
