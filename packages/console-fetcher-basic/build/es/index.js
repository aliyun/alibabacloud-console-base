import { ERROR_BIZ } from '@alicloud/console-fetcher-interceptor-res-biz';
import createFetcher from './util/create-fetcher';
var fetcher = createFetcher();
fetcher.sealInterceptors();
export * from '@alicloud/fetcher';
export default fetcher;
export { ERROR_BIZ, createFetcher };