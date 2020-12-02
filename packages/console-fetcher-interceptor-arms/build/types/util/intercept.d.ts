import { Fetcher } from '@alicloud/fetcher';
import { IInterceptorArmsConfig } from '../types';
/**
 * 为 fetcher 增加 arms 埋点
 */
export default function intercept(fetcher: Fetcher, interceptorConfig?: IInterceptorArmsConfig): () => void;
