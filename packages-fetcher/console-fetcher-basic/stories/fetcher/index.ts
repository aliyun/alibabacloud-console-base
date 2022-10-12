import fetcher0 from '@alicloud/fetcher';
import {
  SLS_CONFIG
} from '@alicloud/fetcher-demo-helpers';

import {
  createFetcher
} from '../../src';

const fetcher1 = createFetcher(undefined, {
  slsConfig: SLS_CONFIG
});

export {
  fetcher0,
  fetcher1
};
