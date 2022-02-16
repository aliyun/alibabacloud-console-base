import {
  subscribe,
  subscribeOnce
} from '@alicloud/post-message';

import {
  EMessageBroadcastByConsoleBase
} from '../enum';

import {
  slsSubscribeByApp
} from './sls';

/**
 * 应用订阅消息，需要记录日志
 */
export default function subscribeByApp<P = void>(type: EMessageBroadcastByConsoleBase | string, fn: (payload: P) => void): () => void {
  slsSubscribeByApp(type, fn);
  
  return subscribe(type, fn);
}

/**
 * 应用订阅单次消息，需要记录日志
 */
export function subscribeOnceByApp<P = void>(type: EMessageBroadcastByConsoleBase | string, fn: (payload: P) => void): () => void {
  slsSubscribeByApp(type, fn);
  
  return subscribeOnce(type, fn);
}
