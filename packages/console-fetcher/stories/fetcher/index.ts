import fetcher0 from '@alicloud/fetcher';
import {
  SLS_CONFIG,
  fetcherDemoInterceptorMockVerifyCodeUrl
} from '@alicloud/fetcher-demo-helpers';

import {
  createFetcher
} from '../../src';

const fetcher1 = createFetcher(undefined, {
  slsConfig: SLS_CONFIG
});

fetcher1.interceptRequest(fetcherDemoInterceptorMockVerifyCodeUrl);

export {
  fetcher0,
  fetcher1
};
