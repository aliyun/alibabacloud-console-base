import { EMessageBroadcastByApp } from '../../const';
import { subscribePromiseByConsoleBase } from '../../util/subscribe-by-console-base';
/**
 * console-base 响应接口统一请求
 */

export default function onFetcherRequest(fn) {
  return subscribePromiseByConsoleBase(EMessageBroadcastByApp.FETCHER_REQUEST, fn);
}