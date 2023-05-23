import {
  FactoryOptions
} from '@alicloud/console-logger-sls';

export interface IFetcherInterceptorConfig {
  slsOptions?: FactoryOptions;
  topicSuccess?: string;
  topicError?: string;
}

export interface IFetcherResponseData {
  requestId?: string;
}
