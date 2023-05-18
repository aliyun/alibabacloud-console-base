import fetcher0, {
  createFetcher
} from '@alicloud/fetcher';
import {
  fetcherDemoInterceptorBiz
} from '@alicloud/fetcher-demo-helpers';

import intercept from '../../src';

const fetcher1 = createFetcher({
  body: {
    riskVersion: '1.0'
  },
  params: {
    riskVersion: '1.0'
  }
});

fetcher1.interceptResponse(fetcherDemoInterceptorBiz);

intercept(fetcher1);

export {
  fetcher0,
  fetcher1
};