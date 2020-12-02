import { FetcherUtils } from '@alicloud/fetcher';
import { logSuccess } from './bl';
export default function createInterceptorResponseSuccess(interceptorConfig) {
  return function (data, config, response) {
    if (interceptorConfig !== null && interceptorConfig !== void 0 && interceptorConfig.shouldIgnore(config)) {
      logSuccess({
        api: FetcherUtils.buildUrl(config.url || '', {
          urlBase: config.urlBase
        }),
        timeStarted: config._timeStarted,
        traceId: response === null || response === void 0 ? void 0 : response.headers['Eagleeye-Traceid']
      });
    }

    return data;
  };
}