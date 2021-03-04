import {
  MAP_RECEIVERS_ONCE,
  pushToReceivers
} from './_the-message';
import unsubscribeOnce from './unsubscribe-once';

/**
 * 注册单次回调，运行一次后将自动移除
 */
export default function subscribeOnce<P = void>(type: string, fn: (payload: P) => void): () => void {
  pushToReceivers(MAP_RECEIVERS_ONCE, type, fn);
  
  return () => unsubscribeOnce(type, fn);
}
