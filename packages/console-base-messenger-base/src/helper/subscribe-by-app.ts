import {
  Unsubscribe,
  subscribe
} from '@alicloud/post-message';

import {
  slsSubscribeByApp
} from '../sls';

/**
 * 应用订阅消息，需要记录日志
 */
export default function subscribeByApp<P = void>(type: string, fn: (payload: P) => void): Unsubscribe {
  slsSubscribeByApp(type, fn);
  
  return subscribe(type, fn);
}