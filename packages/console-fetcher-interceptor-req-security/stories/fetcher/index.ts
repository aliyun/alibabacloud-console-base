import fetcher0, {
  createFetcher
} from '@alicloud/fetcher';

import intercept, {
  FetcherConfigExtendedSecurity
} from '../../src';

const fetcher1 = createFetcher<FetcherConfigExtendedSecurity>();

intercept(fetcher1);

export {
  fetcher0,
  fetcher1
};
