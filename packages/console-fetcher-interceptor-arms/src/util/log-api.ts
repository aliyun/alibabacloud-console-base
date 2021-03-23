import {
  FetcherConfig,
  buildUrl
} from '@alicloud/fetcher';
import {
  getBlConfig,
  armsApi
} from '@alicloud/arms';

export default function logApi(fetcherConfig: FetcherConfig, traceId?: string, success = true, code = '200', message = ''): void {
  if (!getBlConfig()?.disableHook) {
    return;
  }
  
  const timeStarted = fetcherConfig._timeStarted!;
  const duration = timeStarted ? Date.now() - timeStarted : -1;
  const url = buildUrl({
    url: fetcherConfig.url,
    urlBase: fetcherConfig.urlBase,
    urlCacheBusting: false
  });
  
  armsApi(url, success, duration, {
    code,
    message,
    timeStarted,
    traceId
  });
}
