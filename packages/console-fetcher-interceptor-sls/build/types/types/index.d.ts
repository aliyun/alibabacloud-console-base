import { FactoryOptions } from '@alicloud/console-logger-sls';
import { FetcherError } from '@alicloud/fetcher';
export interface IInterceptorSlsConfig extends FactoryOptions {
    topicError?: string;
    logstoreDev?: string;
    logstoreDaily?: string;
    logstorePre?: string;
    shouldIgnore?(err: FetcherError): boolean;
}
export interface ISlsParams {
    fetcherMethod: string;
    fetcherUrl: string;
    fetcherUrlBase?: string;
    fetcherParams?: unknown;
    fetcherBody?: unknown;
    requestId?: string;
    errorName: string;
    errorCode: string;
    errorMessage: string;
    eagleEyeTraceId?: string;
}
