import {
  EMessageBroadcastByApp
} from '../../../const';
import {
  broadcastPromiseByApp
} from '../../../util/broadcast-by-app';

/**
 * fetcher 请求
 * 
 * ！！应用不要直接调用，请通过 @alicloud/console-fetcher-proxy，里边做了封装
 * 
 * payload 类型参考 @alicloud/console-fetcher 的 FetcherConfig，之所以不从里边引类型是为了避免有可能产生的循环及不必要的依赖
 * 
 * TODO 这里冗余一份 payload 的类型
 */
export default function fetcherRequest<P = unknown>(payload: P): Promise<void> {
  return broadcastPromiseByApp<void, P>(EMessageBroadcastByApp.FETCHER_REQUEST, payload);
}
