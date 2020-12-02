import { JsonpResponse } from '@alicloud/fetcher-jsonp';
import { IFetcherResponse } from '../types';
export declare function convertResponseFromFetch<T = void>(response: Response): Promise<IFetcherResponse<T>>;
/**
 * 将 JSONP 的返回转成通用的 FetcherResponse
 *
 * 由于 JSONP 的实现原理，它没有 headers，且一定是成功的（因为如果失败或返回无效的话是无法走到回调的）
 */
export declare function convertResponseFromJsonp<T>(response: JsonpResponse<T>): Promise<IFetcherResponse<T>>;
