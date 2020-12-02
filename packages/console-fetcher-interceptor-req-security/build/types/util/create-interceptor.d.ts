import { FetcherFnInterceptRequest } from '@alicloud/fetcher';
import { IFetcherConfigExtendedSecurity } from '../types';
/**
 * 对有 body 的请求，在 body 中添加阿里云安全必需的参数，这三个参数都可以可以在发送请求的时候覆盖的
 */
export default function createInterceptor(): FetcherFnInterceptRequest<IFetcherConfigExtendedSecurity>;
