import CONF_ENV from '@alicloud/console-base-conf-env';
import {
  FetcherConfig,
  FetcherUtils
} from '@alicloud/fetcher';

/**
 * 判断当前请求是不是 fecs 的请求
 * 注意：「野生」即手写的 FECS 域名判断可能会出错，因为它可能不会像 @alicloud/console-base-conf-env 进行环境判断
 */
export default function isFecs({
  url,
  urlBase
}: FetcherConfig): boolean {
  let protocolHost = FetcherUtils.extractProtocolHost(url);
  
  if (protocolHost) { // 如果 url 是绝对地址，则不会用到 urlBase，不需要往下进行判断
    return protocolHost[1] === CONF_ENV.FECS_HOST;
  }
  
  protocolHost = FetcherUtils.extractProtocolHost(urlBase);
  
  return protocolHost ? protocolHost[1] === CONF_ENV.FECS_HOST : false;
}
