import createFetcher from './factory';

const fetcher = createFetcher();

fetcher.sealInterceptors();

export default fetcher;

export {
  ERROR_TIMEOUT,
  ERROR_NETWORK,
  ERROR_RESPONSE_STATUS,
  ERROR_RESPONSE_PARSE
} from './const';
export * from './helper';

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
