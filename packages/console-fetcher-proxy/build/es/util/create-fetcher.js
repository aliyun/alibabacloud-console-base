import { createFetcher } from '@alicloud/console-fetcher';
import interceptFetcherWithProxy from './intercept-fetcher-with-proxy';
export default (function (config, interceptorOptions) {
  var fetcher = createFetcher(config, interceptorOptions);
  interceptFetcherWithProxy(fetcher);
  return fetcher;
});