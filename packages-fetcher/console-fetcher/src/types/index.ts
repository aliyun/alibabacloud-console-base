import {
  FetcherInterceptorOptions
} from '@alicloud/console-fetcher-basic';
import {
  FetcherInterceptorConfig as FetcherInterceptorConfigRisk
} from '@alicloud/console-fetcher-interceptor-res-risk';

export interface IConsoleFetcherInterceptorOptions extends FetcherInterceptorOptions {
  riskConfig?: FetcherInterceptorConfigRisk;
}

// 为了更直观地暴露新版风控设置的参数，把第三个参数设置为对象更合理，支持 boolean 是兼容老的参数设置
export type TNewRiskOption = boolean | {
  newRisk: boolean;
}