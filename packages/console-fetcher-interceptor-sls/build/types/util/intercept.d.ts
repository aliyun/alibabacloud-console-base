import { Fetcher } from '@alicloud/fetcher';
import { IInterceptorSlsConfig } from '../types';
export default function intercept(fetcher: Fetcher, interceptorConfig: IInterceptorSlsConfig): () => void;
