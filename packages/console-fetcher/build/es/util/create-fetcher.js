import { createFetcher } from '@alicloud/console-fetcher-basic';
import interceptRisk from '@alicloud/console-fetcher-interceptor-res-risk';
export default (function (config) {
  var interceptorOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fetcher = createFetcher(config, interceptorOptions);
  interceptRisk(fetcher, interceptorOptions.riskConfig);
  return fetcher;
});