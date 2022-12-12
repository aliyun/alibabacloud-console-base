import {
  Fetcher,
  createFetcher
} from '@alicloud/fetcher';
import interceptCacheLocal from '@alicloud/fetcher-interceptor-cache-local';
import interceptMerger from '@alicloud/fetcher-interceptor-merger';
import interceptBiz from '@alicloud/console-fetcher-interceptor-res-biz';
import interceptSecurity from '@alicloud/console-fetcher-interceptor-req-security';
import interceptFecs from '@alicloud/console-fetcher-interceptor-fecs';
import interceptErrorMessage from '@alicloud/console-fetcher-interceptor-res-error-message';
import interceptArms from '@alicloud/console-fetcher-interceptor-arms';
import interceptSls from '@alicloud/console-fetcher-interceptor-sls';

import {
  ETypeApi
} from '../enum';
import {
  IConsoleApiOptions,
  IConsoleFetcher,
  IConsoleFetcherConfig,
  IConsoleFetcherInterceptorOptions,
  IFnConsoleApiWithProduct
} from '../types';
import {
  createApi,
  createApiAutoMulti,
  createApiWithProduct
} from '../util';

export default function factory<C extends IConsoleFetcherConfig = IConsoleFetcherConfig>(config?: C, interceptorOptions: IConsoleFetcherInterceptorOptions = {}): IConsoleFetcher<C> {
  const {
    slsConfig,
    armsConfig
  } = interceptorOptions;
  const fetcher = createFetcher<C>(config) as unknown as Fetcher<IConsoleFetcherConfig>; // FIXME
  
  // 顺序很重要...
  interceptBiz(fetcher);
  interceptCacheLocal(fetcher); // 必须在 Biz 之后，因为 biz 结果的处理影响缓存的数据
  interceptMerger(fetcher); // 必须在 CacheLocal 之后，因为 CacheLocal 有类似的逻辑，且 cache 会优先于 merger
  interceptSecurity(fetcher);
  interceptErrorMessage(fetcher);
  interceptFecs(fetcher);
  interceptArms(fetcher, armsConfig);
  
  if (slsConfig) {
    interceptSls(fetcher, slsConfig);
  }
  
  const callMultiOpenApiNew = createApi(fetcher, ETypeApi.OPEN_MULTI);
  const callOpenApi0 = createApi(fetcher, ETypeApi.OPEN);
  const callOpenApi = createApiAutoMulti(callOpenApi0, callMultiOpenApiNew);
  const callInnerApi = createApi(fetcher, ETypeApi.INNER);
  const callContainerApi = createApi(fetcher, ETypeApi.CONTAINER);
  /**
   * 问题在于
   *
   * 1. 你需要拼接调用参数
   * 2. 你需要自己从里边解数据
   * 3. 错误信息丢失
   * 4. 无法处理并行在不同 bundle 下的接口
   * 
   * TODO 这个名字继续保留 callMultiOpenApi 将在不久的将来彻底抹除
   *
   * @deprecated 不要调用，请用 callOpenApi，会在运行期自动合并成 multi 并拆分数据和错误
   */
  const callMultiOpenApi = createApi(fetcher, ETypeApi.OPEN_MULTI_LEGACY);
  
  const createCallOpenApiWithProduct = function<D>(product: string, defaultParams?: D, defaultOptions?: IConsoleApiOptions): IFnConsoleApiWithProduct {
    return createApiWithProduct<D>(callOpenApi, product, defaultParams, defaultOptions);
  };
  const createCallInnerApiWithProduct = function<D>(product: string, defaultParams?: D, defaultOptions?: IConsoleApiOptions): IFnConsoleApiWithProduct {
    return createApiWithProduct<D>(callInnerApi, product, defaultParams, defaultOptions);
  };
  const createCallContainerApiWithProduct = function<D>(product: string, defaultParams?: D, defaultOptions?: IConsoleApiOptions): IFnConsoleApiWithProduct {
    return createApiWithProduct<D>(callContainerApi, product, defaultParams, defaultOptions);
  };
  
  return {
    ...(fetcher as unknown as Fetcher<C>),
    callOpenApi,
    callInnerApi,
    callContainerApi,
    callMultiOpenApi,
    createCallOpenApiWithProduct,
    createCallInnerApiWithProduct,
    createCallContainerApiWithProduct
  };
}
