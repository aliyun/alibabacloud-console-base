import fetcher0, {
  createFetcher
} from '@alicloud/fetcher';

import intercept, {
  FetcherConfigExtended
} from '../../src';

const fetcher1 = createFetcher<FetcherConfigExtended>();

intercept(fetcher1);

export {
  fetcher0,
  fetcher1
};
