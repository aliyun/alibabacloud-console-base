import {
  FetcherInterceptorOptions
} from '@alicloud/console-fetcher-basic';
import {
  FetcherInterceptorConfig as FetcherInterceptorConfigRisk
} from '@alicloud/console-fetcher-interceptor-res-risk';

export interface IConsoleFetcherInterceptorOptions extends FetcherInterceptorOptions {
  riskConfig?: FetcherInterceptorConfigRisk;
}
