import { FetcherInterceptorOptions } from '@alicloud/console-fetcher-basic';
import { ConsoleFetcherRiskConfig } from '@alicloud/console-fetcher-interceptor-res-risk';
export interface IConsoleFetcherInterceptorOptions extends FetcherInterceptorOptions {
    riskConfig?: ConsoleFetcherRiskConfig;
}
