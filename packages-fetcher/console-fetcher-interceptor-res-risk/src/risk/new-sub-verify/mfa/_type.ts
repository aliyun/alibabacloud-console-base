import {
  FetcherConfig,
  FetcherFnRequest
} from '@alicloud/fetcher';

import {
  IFetcherInterceptorConfig,
  ISubAccountRiskInfo
} from '../../../types';

export interface IParams {
  request: FetcherFnRequest;
  fetcherConfig: FetcherConfig;
  riskConfig: IFetcherInterceptorConfig;
  subRiskInfo: ISubAccountRiskInfo;
}

export enum ESubmitType {
  BIND,
  AUTH
}