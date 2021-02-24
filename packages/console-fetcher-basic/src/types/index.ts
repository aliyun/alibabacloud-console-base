import {
  Fetcher,
  FetcherConfig,
  FetcherOptionsForQuickPost
} from '@alicloud/fetcher';
import {
  FetcherConfigExtra as FetcherConfigExtraBiz
} from '@alicloud/console-fetcher-interceptor-res-biz';
import {
  FetcherConfigExtra as FetcherConfigExtraCacheLocal
} from '@alicloud/console-fetcher-interceptor-cache-local';
import {
  FetcherConfigExtra as FetcherConfigExtraMerger
} from '@alicloud/console-fetcher-interceptor-merger';
import {
  FetcherConfigExtra as FetcherConfigExtraSecurity
} from '@alicloud/console-fetcher-interceptor-req-security';
import {
  FetcherInterceptorConfig as FetcherInterceptorConfigArms
} from '@alicloud/console-fetcher-interceptor-arms';
import {
  FetcherInterceptorConfig as FetcherInterceptorConfigSls
} from '@alicloud/console-fetcher-interceptor-sls';

export interface IConsoleFetcherConfig extends FetcherConfig, FetcherConfigExtraBiz, FetcherConfigExtraCacheLocal, FetcherConfigExtraMerger, FetcherConfigExtraSecurity {}

export interface IConsoleFetcherInterceptorOptions {
  armsConfig?: FetcherInterceptorConfigArms;
  slsConfig?: FetcherInterceptorConfigSls;
}

export interface IConsoleApiOptions<R = unknown> extends FetcherOptionsForQuickPost<IConsoleFetcherConfig> {
  region?: string;
  roa?: R; // ROA 形式的接口需要
}

export interface IConsoleApiBody {
  product: string;
  action: string;
  params?: string;
  region?: string;
  content?: string;
}

/**
 * call(Open/Inner/Container)API 的共同类型
 */
export interface IFnConsoleApi {
  <T = void, P = void, R = void>(product: string, action: string, param?: P, options?: IConsoleApiOptions<R>): Promise<T>;
}

export type TConsoleApiMultiResult = Record<string, unknown>;

export interface IConsoleApiMultiAction {
  action: string;
  params?: Record<string, unknown>;
  customRequestKey?: string;
}

export interface IConsoleApiBodyMulti {
  product: string;
  actions: string;
}

export interface IFnConsoleApiMulti {
  (product: string, actions: IConsoleApiMultiAction[]): Promise<TConsoleApiMultiResult>;
}

export interface IConsoleApis {
  callOpenApi: IFnConsoleApi;
  callInnerApi: IFnConsoleApi;
  callContainerApi: IFnConsoleApi;
  callMultiOpenApi: IFnConsoleApiMulti;
}

export interface IConsoleFetcher<C extends IConsoleFetcherConfig = IConsoleFetcherConfig> extends Fetcher<C>, IConsoleApis {}
