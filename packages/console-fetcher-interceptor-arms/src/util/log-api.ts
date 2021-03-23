import {
  FetcherConfig,
  buildUrl
} from '@alicloud/fetcher';
import {
  getInitializedArms
} from '@alicloud/arms';

export default function logApi(fetcherConfig: FetcherConfig, traceId?: string, success = true, code = '200', message = ''): void {
  const arms = getInitializedArms();
  
  if (!arms?._conf.disableHook) {
    return;
  }
  
  const timeStarted = fetcherConfig._timeStarted!;
  const duration = timeStarted ? Date.now() - timeStarted : -1;
  const api = buildUrl({
    url: fetcherConfig.url,
    urlBase: fetcherConfig.urlBase,
    urlCacheBusting: false
  });
  
  if (arms.api) {
    arms.api(api, success, duration, code, message, timeStarted, traceId);
  } else {
    arms.pipe = arms.pipe || [];
    arms.pipe.push([
      'api',
      api,
      success,
      duration,
      code,
      message,
      timeStarted,
      traceId
    ]);
  }
}
