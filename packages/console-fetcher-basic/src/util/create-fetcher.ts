import {
  createFetcher
} from '@alicloud/fetcher';
import interceptCacheLocal from '@alicloud/console-fetcher-interceptor-cache-local';
import interceptSecurity from '@alicloud/console-fetcher-interceptor-req-security';
import interceptFecs from '@alicloud/console-fetcher-interceptor-fecs';
import interceptErrorMessage from '@alicloud/console-fetcher-interceptor-res-error-message';
import interceptBiz from '@alicloud/console-fetcher-interceptor-res-biz';
import interceptArms from '@alicloud/console-fetcher-interceptor-arms';
import interceptSls from '@alicloud/console-fetcher-interceptor-sls';

import {
  IConsoleFetcher,
  IConsoleFetcherConfig,
  IConsoleFetcherInterceptorOptions
} from '../types';
import {
  ETypeApi,
  ETypeApiMulti
} from '../const';

import createApi from './create-api';
import createMultiApi from './create-multi-api';

export default <C extends IConsoleFetcherConfig = IConsoleFetcherConfig>(config?: C, interceptorOptions: IConsoleFetcherInterceptorOptions = {}): IConsoleFetcher<C> => {
  const {
    slsConfig,
    armsConfig
  } = interceptorOptions;
  const fetcher = createFetcher<C>(config);
  
  // 顺序很重要...
  interceptBiz(fetcher);
  interceptCacheLocal(fetcher); // 必须在 biz 之后，因为 biz 结果的处理影响缓存的数据
  interceptSecurity(fetcher);
  interceptErrorMessage(fetcher);
  interceptFecs(fetcher);
  interceptArms(fetcher, armsConfig);
  
  if (slsConfig) {
    interceptSls(fetcher, slsConfig);
  }
  
  return {
    ...fetcher,
    callOpenApi: createApi(fetcher.post, ETypeApi.OPEN),
    callInnerApi: createApi(fetcher.post, ETypeApi.INNER),
    callContainerApi: createApi(fetcher.post, ETypeApi.CONTAINER),
    callMultiOpenApi: createMultiApi(fetcher.post, ETypeApiMulti.OPEN)
  };
};
