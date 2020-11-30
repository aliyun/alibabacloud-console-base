import {
  FetcherConfig,
  FetcherError
} from '@alicloud/fetcher';

export interface IInterceptorArmsConfig {
  shouldIgnore?(config: FetcherConfig, err?: FetcherError): boolean;
}
