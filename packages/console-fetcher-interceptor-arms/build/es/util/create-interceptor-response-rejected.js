import { FetcherUtils } from '@alicloud/fetcher';
import { logError } from './bl';
export default function createInterceptorResponseRejected(interceptorConfig) {
  return function (err, config, response) {
    if (!(interceptorConfig !== null && interceptorConfig !== void 0 && interceptorConfig.shouldIgnore(config, err))) {
      logError({
        api: FetcherUtils.buildUrl(config.url || '', {
          urlBase: config.urlBase
        }),
        code: err.code,
        message: err.message,
        timeStarted: config._timeStarted,
        traceId: response === null || response === void 0 ? void 0 : response.headers['Eagleeye-Traceid']
      });
    }

    throw err; // 继续错下去
  };
}