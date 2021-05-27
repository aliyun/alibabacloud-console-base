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
} from '@alicloud/fetcher-interceptor-cache-local';
import {
  FetcherConfigExtra as FetcherConfigExtraMerger
} from '@alicloud/fetcher-interceptor-merger';
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

/**
 * Open/Inner/Container API 的第四个参数
 */
export interface IConsoleApiOptions extends FetcherOptionsForQuickPost<IConsoleFetcherConfig> {
  /**
   * OneConsole 会通过它来判断时候对应的接口 endpoint，之前有人设计成它混在业务参数 params 里边，然后通过拦截器...
   * 我实在不能苟同更少，业务参数和非业务参数必须是分开的，所以这里多了一个额外的 options 来做这层逻辑，使用者必须清晰地认识到这不是业务参数。
   */
  region?: string;
  roa?: unknown; // ROA 形式的接口需要，字符串或 JSON 对象
  // OpenAPI 是否自动合并请求为 multi，自动合并的请求会延时发送，默认 true，如果不需要 autoMulti 需要显式指定为 false
  autoMulti?: boolean;
}

export interface IConsoleApiBody {
  product: string;
  action: string;
  params?: string;
  region?: string;
  content?: string;
}

export interface IConsoleApiBodyMulti {
  product: string;
  actions: string;
  region?: string;
  content?: string;
}

export interface IConsoleApiMultiError {
  Code: string;
  Message: string;
  RequestId: string;
  HttpStatusCode: string; // e.g. 404
  BizCode: string | null;
}

export type TConsoleApiMultiResult = Record<string, unknown>;

export interface IConsoleApiMultiAction {
  action: string;
  params?: unknown;
  customRequestKey?: string;
}

/**
 * call(Open/Inner/Container)API 的共同类型
 */
export interface IFnConsoleApi {
  <T = void, P = void>(product: string, action: string, param?: P, options?: IConsoleApiOptions): Promise<T>;
}

/**
 * 并发 API 调用的返回，嗯... 是这样的：
 * 
 * 1. 不论内部成功与否，外层都是成功的，即 code === '200'
 * 2. 返回的 data 是一个对象，如果不指定 `customRequestKey` 则为数字，0 起步
 * 3. 如果某个接口调用成功，则它在 data 中对应的值是对应单独接口的 data（有 RequestId，和最外层的不一样）
 * 4. 如果某个接口调用失败，则它一定是业务失败，在 data 中对应的位置是一个大写开头属性的对象 IConsoleApiMultiError...
 * 5. 那末... 怎么判断是错误与否呢...因为理论上成功的 data 也是可以有 Code 等的，针对蠢设计只能用蠢逻辑.. 判断 Code 是否为字符串存在
 * 
 * 所以，不建议直接手动调用 multi，因为那样的话，你需要人肉组装接口参数，人肉判断成功失败...
 * 好在 console-fetcher-basic 这里封装了自动 multi 的逻辑，你可以在任何时候直接调用单个的 openApi，或者放心使用 Promise.all 而不必担心性能问题。
 */
export interface IFnConsoleApiMulti {
  (product: string, actions: IConsoleApiMultiAction[], options?: IConsoleApiOptions): Promise<TConsoleApiMultiResult>;
}

export interface IConsoleApis {
  callOpenApi: IFnConsoleApi;
  callInnerApi: IFnConsoleApi;
  callContainerApi: IFnConsoleApi;
  callMultiOpenApi: IFnConsoleApiMulti;
}

export interface IConsoleFetcher<C extends IConsoleFetcherConfig = IConsoleFetcherConfig> extends Fetcher<C>, IConsoleApis {}
