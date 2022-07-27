import {
  IFnUnsubscribe,
  IPayloadBroadcastPromise,
  IPayloadBroadcastPromiseBack
} from '../types';
import {
  errorToPlain
} from '../util';

import broadcast from './broadcast';
import subscribe from './subscribe';

function subscribePromise<T = void>(type: string, fn: () => T | Promise<T>): IFnUnsubscribe;
function subscribePromise<T, P>(type: string, fn: (payload: P) => T | Promise<T>): IFnUnsubscribe;

/**
 * 对 broadcastPromise 对应的 type 进行响应，这里关心的 payload 还是 broadcastPromise 所传入的 payload
 */
function subscribePromise<T, P>(type: string, fn: (payload: P) => T | Promise<T>): IFnUnsubscribe {
  return subscribe<IPayloadBroadcastPromise<P>>(type, (payload: IPayloadBroadcastPromise<P>) => {
    // 得到的 payload 下有 _dismiss_ 参数才响应，否则 pass
    if (!payload?._dismiss_) { // eslint-disable-line @typescript-eslint/no-unnecessary-condition
      return;
    }
    
    // 这里广播是事件会被 `broadcastPromise` 方法内部的 subscribeOnce 消化
    Promise.resolve(fn(payload.payload)).then((value: T) => {
      broadcast<IPayloadBroadcastPromiseBack<T>>(payload._dismiss_, {
        value
      });
    }, (err: unknown) => {
      broadcast<IPayloadBroadcastPromiseBack<T>>(payload._dismiss_, {
        error: errorToPlain(err)
      });
    });
  });
}

export default subscribePromise;
