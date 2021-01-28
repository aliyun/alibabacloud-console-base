import {
  createFetcher
} from '@alicloud/fetcher';
import {
  fetcherDemoInterceptorBiz
} from '@alicloud/fetcher-demo-helpers';

import intercept, {
  FetcherConfigExtended
} from '../../src';

const fetcher = createFetcher<FetcherConfigExtended>();

fetcher.interceptResponse(fetcherDemoInterceptorBiz);

intercept(fetcher);

export default fetcher;

export function request<T = unknown>(fetcherConfig: FetcherConfigExtended): Promise<T> {
  return fetcher.request<T>({
    ...fetcherConfig,
    cacheLocal: true
  });
}
