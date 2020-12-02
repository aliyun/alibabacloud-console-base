import fetcher0, {
  createFetcher
} from '@alicloud/fetcher';

import intercept from '../../src';

const fetcher1 = createFetcher();

intercept(fetcher1);

export {
  fetcher0,
  fetcher1
};
