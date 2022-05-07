import {
  subscribeOnce
} from '@alicloud/post-message';

import {
  slsSubscribeByApp
} from '../sls';

/**
 * 应用订阅单次消息，需要记录日志
 */
export default function subscribeOnceByApp<P = void>(type: string, fn: (payload: P) => void): () => void {
  slsSubscribeByApp(type, fn);
  
  return subscribeOnce(type, fn);
}
