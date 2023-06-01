import CONF_ENV from '@alicloud/console-base-conf-env';
import {
  createFetcher
} from '@alicloud/fetcher';
import interceptBiz, {
  FetcherConfigExtended
} from '@alicloud/console-fetcher-interceptor-res-biz';
import interceptErrorMessage from '@alicloud/console-fetcher-interceptor-res-error-message';

const identityUrlBase = ((): string => {
  if (CONF_ENV.ENV_IS_DAILY) {
    return '//identity.aliyun.test';
  }

  if (CONF_ENV.ENV_IS_PRE) {
    return '//pre-identity.aliyun.com';
  }

  // 默认返回线上的域名
  return '//identity.aliyun.com';
})();

const identityFetcher = createFetcher<FetcherConfigExtended>({
  urlBase: identityUrlBase,
  headers: {
    'Content-Type': 'application/json'
  }
});

interceptBiz(identityFetcher);
interceptErrorMessage(identityFetcher);
identityFetcher.sealInterceptors();

export default identityFetcher;
