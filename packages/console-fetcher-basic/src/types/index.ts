import {
  Fetcher,
  FetcherConfig,
  FetcherOptionsForQuickPost
} from '@alicloud/fetcher';
import {
  FetcherConfigExtraSecurity
} from '@alicloud/console-fetcher-interceptor-req-security';
import {
  FetcherConfigExtraBiz
} from '@alicloud/console-fetcher-interceptor-res-biz';
import {
  ConsoleFetcherInterceptorArmsConfig
} from '@alicloud/console-fetcher-interceptor-arms';
import {
  ConsoleFetcherInterceptorSlsConfig
} from '@alicloud/console-fetcher-interceptor-sls';

export type TApiMultiResult = Record<string, unknown>;

/**
 * call(Open/Inner/Container)API 的共同类型
 */
export interface IFnConsoleApi {
  <T = void, P = void>(product: string, action: string, param?: P, options?: FetcherOptionsForQuickPost<IConsoleFetcherConfig>): Promise<T>;
}

export interface IFnConsoleApiMulti {
  (product: string, actions: IApiMultiAction[]): Promise<TApiMultiResult>;
}

export interface IApiMultiAction {
  action: string;
  params?: Record<string, unknown>;
  customRequestKey?: string;
}

export interface IApiBody {
  product: string;
  action: string;
  params?: string;
}

export interface IApiBodyMulti {
  product: string;
  actions: string;
}

export interface IConsoleApis {
  callOpenApi: IFnConsoleApi;
  callInnerApi: IFnConsoleApi;
  callContainerApi: IFnConsoleApi;
  callMultiOpenApi: IFnConsoleApiMulti;
}

export interface IConsoleFetcherConfig extends FetcherConfig, FetcherConfigExtraSecurity, FetcherConfigExtraBiz {}

export interface IConsoleFetcher<C extends IConsoleFetcherConfig = IConsoleFetcherConfig> extends Fetcher<C>, IConsoleApis {}

export interface IConsoleFetcherInterceptorOptions {
  armsConfig?: ConsoleFetcherInterceptorArmsConfig;
  slsConfig?: ConsoleFetcherInterceptorSlsConfig;
}
