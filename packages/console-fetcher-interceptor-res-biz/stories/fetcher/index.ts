import fetcher0, {
  createFetcher
} from '@alicloud/fetcher';

import intercept, {
  FetcherConfigExtendedBiz
} from '../../src';

const fetcher1 = createFetcher<FetcherConfigExtendedBiz>();

intercept(fetcher1);

export {
  fetcher0,
  fetcher1
};
