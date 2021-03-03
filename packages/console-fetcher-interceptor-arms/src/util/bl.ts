import {
  ArmsWindowExtended
} from '@alicloud/console-base-common-typings';
import {
  FetcherConfig,
  buildUrl
} from '@alicloud/fetcher';

export default function logApi(fetcherConfig: FetcherConfig, traceId?: string, success = true, code = '200', message = ''): void {
  const bl = (window as ArmsWindowExtended).__bl;
  
  if (!bl?._conf?.disableHook) {
    return;
  }
  
  const timeStarted = fetcherConfig._timeStarted!;
  const duration = timeStarted ? Date.now() - timeStarted : -1;
  const api = buildUrl({
    url: fetcherConfig.url,
    urlBase: fetcherConfig.urlBase,
    urlCacheBusting: false
  });
  
  if (bl.api) {
    bl.api(api, success, duration, code, message, timeStarted, traceId);
  } else {
    bl.pipe = bl.pipe || [];
    bl.pipe.push([
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
