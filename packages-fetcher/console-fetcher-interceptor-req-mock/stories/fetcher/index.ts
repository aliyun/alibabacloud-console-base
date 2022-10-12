import fetcher0, {
  createFetcher
} from '@alicloud/fetcher';
import {
  fetcherDemoInterceptorBiz
} from '@alicloud/fetcher-demo-helpers';

import intercept from '../../src';

const fetcher1 = createFetcher();

fetcher1.interceptResponse(fetcherDemoInterceptorBiz);

intercept(fetcher1, {
  one: {
    ram: 'ram_next'
  },
  others: [{
    id: 'boshit',
    check(config): boolean | string | void {
      if (config.url && /^\/boshit(\/.*)/.test(config.url)) {
        return RegExp.$1;
      }
    }
  }, {
    id: 'oss',
    check(config): boolean | string | void {
      if (config.url && /^\/oss(\/ajax\/.*)/.test(config.url)) {
        return RegExp.$1;
      }
    }
  }, {
    id: 'ram_next',
    check(config): boolean | string | void {
      if (config.url && /^\/ram(\/.*)/.test(config.url)) {
        return RegExp.$1;
      }
    }
  }]
});

export {
  fetcher0,
  fetcher1
};
