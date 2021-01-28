import {
  FetcherConfig,
  FetcherError
} from '@alicloud/fetcher';

export interface IFetcherInterceptorConfig {
  shouldIgnore?(config: FetcherConfig, err?: FetcherError): boolean;
}
