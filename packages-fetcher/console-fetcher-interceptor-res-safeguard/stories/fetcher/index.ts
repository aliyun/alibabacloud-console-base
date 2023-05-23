import fetcher0, {
  createFetcher
} from '@alicloud/fetcher';
import {
  fetcherDemoInterceptorBiz,
  fetcherDemoInterceptorMockSystemUrls
} from '@alicloud/fetcher-demo-helpers';
import fetcherBasic from '@alicloud/console-fetcher-basic'; // TODO 新增一个全局 intercept for demo only，这样就不需要 hack 它了

import intercept from '../../src';

fetcherBasic.sealInterceptors(false, false);
fetcherBasic.interceptRequest(fetcherDemoInterceptorMockSystemUrls);
fetcherBasic.sealInterceptors(true, true);

const fetcher1 = createFetcher();

fetcher1.interceptResponse(fetcherDemoInterceptorBiz);

intercept(fetcher1);

export {
  fetcher0,
  fetcher1
};
