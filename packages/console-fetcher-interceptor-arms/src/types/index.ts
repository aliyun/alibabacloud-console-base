import {
  FetcherConfig,
  FetcherError
} from '@alicloud/fetcher';

export interface IFetcherInterceptorConfig {
  shouldIgnore?(fetcherConfig: FetcherConfig, err?: FetcherError): boolean;
}
