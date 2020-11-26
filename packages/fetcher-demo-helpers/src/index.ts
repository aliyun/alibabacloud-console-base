import {
  IDemoConfig as FetcherDemoConfig
} from './types';
import {
  SLS_CONFIG
} from './const';
import FetcherDemoRcMockArms from './rc/demo-mock-arms';
import FetcherDemoRcMockSecurity from './rc/demo-mock-security';
import FetcherDemoRcFetchers from './rc/demo-fetchers';
import FetcherDemoRcRequest from './rc/demo-request';
import fetcherDemoInterceptorBiz from './demo-interceptor/biz';
import fetcherDemoInterceptorMockVerifyCodeUrl from './demo-interceptor/mock-verify-code-url';

export {
  SLS_CONFIG,
  FetcherDemoRcMockArms,
  FetcherDemoRcMockSecurity,
  FetcherDemoRcFetchers,
  FetcherDemoRcRequest,
  fetcherDemoInterceptorBiz,
  fetcherDemoInterceptorMockVerifyCodeUrl
};

export type {
  FetcherDemoConfig
};
