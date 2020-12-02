import {
  fetcherDemoInterceptorBiz
} from '@alicloud/fetcher-demo-helpers';

import fetcher0, {
  createFetcher
} from '../../src';

const fetcher1 = createFetcher();

fetcher1.interceptRequest(() => ({
  params: {
    fuck: 'you'
  }
}));

fetcher1.interceptResponse(fetcherDemoInterceptorBiz);

export {
  fetcher0,
  fetcher1
};
