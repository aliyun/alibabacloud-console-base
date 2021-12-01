import fetcher0, {
  createFetcher
} from '@alicloud/fetcher';
import {
  fetcherDemoInterceptorBiz,
  fetcherDemoInterceptorMockVerifyCodeUrl
} from '@alicloud/fetcher-demo-helpers';

import intercept from '../../src';

const fetcher1 = createFetcher({
  body: {
    riskVersion: '2.0'
  },
  params: {
    riskVersion: '2.0'
  }
});

fetcher1.interceptResponse(fetcherDemoInterceptorBiz);
fetcher1.interceptRequest(fetcherDemoInterceptorMockVerifyCodeUrl);

intercept(fetcher1, {
  URL_MFA_BIND: '/identity/bindMFA',
  URL_MFA_AUTH: '/identity/verify',
  URL_GET_MFA_INFO_TO_BIND: '/identity/getMfaInfoToBind',
  URL_GET_MFA_INFO_TO_AUTH: '/identity/getMfaInfoToAuth',
  URL_SKIP_BIND_MFA: '/identity/skip'
});

export {
  fetcher0,
  fetcher1
};