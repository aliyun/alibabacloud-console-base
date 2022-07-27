import {
  IFnUnsubscribe
} from '../types';

import {
  MAP_RECEIVERS,
  pushToReceivers
} from './_the-message';
import unsubscribe from './unsubscribe';

function subscribe(type: string, fn: () => void): IFnUnsubscribe;
function subscribe<P>(type: string, fn: (payload: P) => void): IFnUnsubscribe;

/**
 * 注册回调，返回可用于反注册的方法
 */
function subscribe<P = void>(type: string, fn: (payload: P) => void): IFnUnsubscribe {
  pushToReceivers(MAP_RECEIVERS, type, fn);
  
  return (): void => unsubscribe(type, fn);
}

export default subscribe;