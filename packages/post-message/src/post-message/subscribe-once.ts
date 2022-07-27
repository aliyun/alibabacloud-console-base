import {
  IFnUnsubscribe
} from '../types';

import {
  MAP_RECEIVERS_ONCE,
  pushToReceivers
} from './_the-message';
import unsubscribeOnce from './unsubscribe-once';

function subscribeOnce(type: string, fn: () => void): IFnUnsubscribe;
function subscribeOnce<P>(type: string, fn: (payload: P) => void): IFnUnsubscribe;

/**
 * 注册单次回调，运行一次后将自动移除
 */
function subscribeOnce<P = void>(type: string, fn: (payload: P) => void): IFnUnsubscribe {
  pushToReceivers(MAP_RECEIVERS_ONCE, type, fn);
  
  return () => unsubscribeOnce(type, fn);
}

export default subscribeOnce;
