import createFetcher from './util/create-fetcher';

const fetcher = createFetcher();

fetcher.sealInterceptors();

export default fetcher;

export {
  ERROR_TIMEOUT,
  ERROR_NETWORK,
  ERROR_RESPONSE_STATUS,
  ERROR_RESPONSE_PARSE
} from './const';
export { default as createError } from './util/error/create';
export { default as createErrorSkipNetwork } from './util/error/create-skip-network';
export { default as buildUrl } from './util/build-url';
export { default as canHaveBody } from './util/can-have-body';
export { default as isCors } from './util/is-cors';
export { default as mergeConfig } from './util/merge-config';
export { default as extractProtocolHost } from './util/extract-protocol-host';

export {
  createFetcher
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
