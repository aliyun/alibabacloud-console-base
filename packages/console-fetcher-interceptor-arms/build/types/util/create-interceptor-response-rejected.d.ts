import { FetcherConfig, FetcherFnInterceptResponseRejected } from '@alicloud/fetcher';
import { IInterceptorArmsConfig } from '../types';
export default function createInterceptorResponseRejected(interceptorConfig?: IInterceptorArmsConfig): FetcherFnInterceptResponseRejected<FetcherConfig>;
