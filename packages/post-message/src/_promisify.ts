import _isError from 'lodash/isError';
import _isPlainObject from 'lodash/isPlainObject';
import _forEach from 'lodash/forEach';

import {
  subscribe,
  subscribeOnce,
  broadcast
} from './_basic';

/**
 * 以 promise 的形式广播事件的时候的 payload 包裹
 */
interface IPayloadBroadcast<P = void> {
  payload?: P; // 原 payload
  _dismiss_: string; // subscribePromise 中会将此包裹打开，如果里边有该值，表明此事件合法，否则不会响应
}

/**
 * broadcastPromise 和 subscribePromise 的纽带
 */
interface IPayloadBroadcastBack<T> {
  value?: T;
  error?: unknown; // 可能是 string、对象或 Error
}

/**
 * postMessage 不支持传 Error 对象
 */
function errorToPlain(err: unknown): unknown {
  if (!_isError(err)) {
    return err;
  }
  
  const plain: Record<string, unknown> = {};
  
  _forEach(err, (v, k) => {
    plain[k] = v;
  });
  
  ['message', 'name', 'stack'].forEach(v => {
    if (!plain[v]) {
      plain[v] = (err as any)[v];
    }
  });
  
  return plain;
}

function plainToError(o: any): unknown {
  if (!_isPlainObject(o)) {
    return o;
  }
  
  const err = new Error();
  
  _forEach(o as Record<string, unknown>, (v, k) => {
    (err as any)[k] = o[k];
  });
  
  return err;
}

/**
 * 广播事件，返回 Promise，必须要有 subscribePromise 来承接该事件，否则此 Promise 将永远无法结束
 */
export function broadcastPromise<T = void, P = void>(type: string, payload?: P): Promise<T> {
  // 生成一个事件 type，用于 subscribePromise 里进行事件回调，因为 `postMessage` 无法传输 function，
  // 所以只好经由这种「曲线救国」的方式。
  const _dismiss_ = `${type}/end/${Date.now()}-${Math.round(Math.random() * 100000)}`;
  
  // 这里会触发 subscribePromise 的回调，不要放到 new Promise 内部，因为它可能会报错，这个错需要保持是同步的
  broadcast<IPayloadBroadcast<P>>(type, {
    payload,
    _dismiss_
  });
    
  return new Promise<T>((resolve, reject) => {
    // subscribePromise 的回调返回的是 Promise，它 resolve 或 reject 都会广播一个以 _dismiss_ 为类型的 message，
    // 这里使用单次订阅是因为这个 message 只需要消费一次。
    subscribeOnce<IPayloadBroadcastBack<T>>(_dismiss_, (payloadBack?: IPayloadBroadcastBack<T>): void => {
      if (!payloadBack) { // 一般来说不可能没有 payloadBack，但代码需要严谨
        return reject();
      }
      
      const {
        value,
        error
      } = payloadBack;
      
      if (error) {
        reject(plainToError(error));
      } else {
        resolve(value as T);
      }
    });
  });
}

/**
 * 对 broadcastPromise 对应的 type 进行响应，这里关心的 payload 还是 broadcastPromise 所传入的 payload
 */
export function subscribePromise<T = void, P = void>(type: string, fn: (payload?: P) => T | Promise<T>): () => void {
  return subscribe<IPayloadBroadcast<P>>(type, (payload?: IPayloadBroadcast<P>) => {
    // 得到的 payload 下有 _dismiss_ 参数才响应，否则 pass
    if (!payload?._dismiss_) {
      return;
    }
    
    // 这里广播是事件会被 `broadcastPromise` 方法内部的 subscribeOnce 消化
    Promise.resolve(fn(payload.payload)).then((value: T) => {
      broadcast<IPayloadBroadcastBack<T>>(payload._dismiss_, {
        value
      });
    }, (err: unknown) => {
      broadcast<IPayloadBroadcastBack<T>>(payload._dismiss_, {
        error: errorToPlain(err)
      });
    });
  });
}
