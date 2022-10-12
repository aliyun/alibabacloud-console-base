import fetcher0, {
  createFetcher
} from '@alicloud/fetcher';
import {
  SLS_CONFIG,
  fetcherDemoInterceptorBiz
} from '@alicloud/fetcher-demo-helpers';

import intercept from '../../src';

const fetcher1 = createFetcher();

fetcher1.interceptResponse(fetcherDemoInterceptorBiz);

intercept(fetcher1, SLS_CONFIG);

export {
  fetcher0,
  fetcher1
};
