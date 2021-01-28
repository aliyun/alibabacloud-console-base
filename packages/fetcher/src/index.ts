import createFetcher from './util/create-fetcher';
import createError from './util/error/create';
import createErrorSkipNetwork from './util/error/create-skip-network';
import buildUrl from './util/build-url';
import canHaveBody from './util/can-have-body';
import isCors from './util/is-cors';
import mergeConfig from './util/merge-config';
import extractProtocolHost from './util/extract-protocol-host';

const FetcherUtils = {
  createError,
  createErrorSkipNetwork,
  buildUrl,
  canHaveBody,
  isCors,
  mergeConfig,
  extractProtocolHost
};

const fetcher = createFetcher();

fetcher.sealInterceptors();

export default fetcher;

export {
  ERROR_TIMEOUT,
  ERROR_NETWORK,
  ERROR_RESPONSE_STATUS,
  ERROR_RESPONSE_PARSE
} from './const';

export {
  createFetcher,
  FetcherUtils
};

export type {
  IFetcher as Fetcher,
  IFetcherConfig as FetcherConfig,
  IFetcherResponse as FetcherResponse,
  IFetcherError as FetcherError,
  IFnFetcherRequest as FetcherFnRequest,
  IFnFetcherJsonp as FetcherFnJsonp,
  IFnFetcherGetAlike as FetcherFnGet,
  IFnFetcherPostAlike as FetcherFnPost,
  TFetcherOptionsForQuickJsonp as FetcherOptionsForQuickJsonp,
  TFetcherOptionsForQuickFn as FetcherOptionsForQuickGet,
  TFetcherOptionsForQuickFn as FetcherOptionsForQuickPost,
  TFetcherInterceptRequestReturn as FetcherInterceptRequestReturn,
  IFnInterceptRequest as FetcherFnInterceptRequest,
  IFnInterceptResponseFulfilled as FetcherFnInterceptResponseFulfilled,
  IFnInterceptResponseRejected as FetcherFnInterceptResponseRejected,
  IFetcherBuildUrlOptions as FetcherBuildUrlOptions
} from './types';
