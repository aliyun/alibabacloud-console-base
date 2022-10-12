import {
  FetcherConfig,
  createFetcher
} from '@alicloud/fetcher';
import {
  fetcherDemoInterceptorBiz
} from '@alicloud/fetcher-demo-helpers';
import CONF_ENV from '@alicloud/console-base-conf-env';

import intercept from '../../src';

const fetcher = createFetcher<FetcherConfig>({
  urlBase: CONF_ENV.FECS_URL_BASE
});
const fetcherNoFecs = createFetcher(); // 用于测试调用 /data/api.json 是否会自动到 FECS（因为当前不是 OneConsole 环境）

fetcher.interceptResponse(fetcherDemoInterceptorBiz); // 必须在之前
intercept(fetcher);

fetcherNoFecs.interceptResponse(fetcherDemoInterceptorBiz); // 必须在之前
intercept(fetcherNoFecs);

export default fetcher;

export {
  fetcherNoFecs
};
