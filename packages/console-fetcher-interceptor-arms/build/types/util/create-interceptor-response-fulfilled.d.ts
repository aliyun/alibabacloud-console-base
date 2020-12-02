import { FetcherConfig, FetcherFnInterceptResponseFulfilled } from '@alicloud/fetcher';
import { IInterceptorArmsConfig } from '../types';
export default function createInterceptorResponseSuccess(interceptorConfig?: IInterceptorArmsConfig): FetcherFnInterceptResponseFulfilled<FetcherConfig>;
