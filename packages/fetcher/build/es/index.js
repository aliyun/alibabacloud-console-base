import { ERROR_TIMEOUT, ERROR_NETWORK, ERROR_RESPONSE_STATUS, ERROR_RESPONSE_PARSE } from './const';
import createFetcher from './util/create-fetcher';
import createError from './util/error/create';
import createErrorSkipNetwork from './util/error/create-skip-network';
import buildUrl from './util/build-url';
import canHaveBody from './util/can-have-body';
import isCors from './util/is-cors';
import mergeConfig from './util/merge-config';
import extractProtocolHost from './util/extract-protocol-host';
var FetcherUtils = {
  createError: createError,
  createErrorSkipNetwork: createErrorSkipNetwork,
  buildUrl: buildUrl,
  canHaveBody: canHaveBody,
  isCors: isCors,
  mergeConfig: mergeConfig,
  extractProtocolHost: extractProtocolHost
};
var fetcher = createFetcher();
fetcher.sealInterceptors();
export default fetcher; // 常量与工具

export { ERROR_TIMEOUT, ERROR_NETWORK, ERROR_RESPONSE_STATUS, ERROR_RESPONSE_PARSE, createFetcher, FetcherUtils }; // 类型