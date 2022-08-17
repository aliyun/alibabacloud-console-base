import fetcher0, {
  createFetcher
} from '@alicloud/fetcher';

import index, {
  FetcherConfigExtended
} from '../../src';

const fetcher1 = createFetcher<FetcherConfigExtended>();

index(fetcher1);

export {
  fetcher0,
  fetcher1
};
