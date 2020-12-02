import { FetcherFnInterceptResponseRejected } from '@alicloud/fetcher';
import { IInterceptorSlsConfig } from '../types';
export default function createInterceptor({ topicError, logstoreDev, logstoreDaily, logstorePre, shouldIgnore, ...slsOptions }: IInterceptorSlsConfig): FetcherFnInterceptResponseRejected;
