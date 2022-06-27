import {
  IPayloadBroadcastPromise,
  IPayloadBroadcastPromiseBack
} from '../types';
import plainToError from '../util/plain-to-error';

import broadcast from './broadcast';
import subscribeOnce from './subscribe-once';

/**
 * 广播事件，返回 Promise，必须要有 subscribePromise 来承接该事件，否则此 Promise 将永远无法结束
 */
export default function broadcastPromise<T = void, P = void>(type: string, payload: P): Promise<T> {
  // 生成一个事件 type，用于 subscribePromise 里进行事件回调，因为 `postMessage` 无法传输 function，
  // 所以只好经由这种「曲线救国」的方式。
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _dismiss_ = `${type}/end/${Date.now()}-${Math.round(Math.random() * 100000)}`;
  
  // 这里会触发 subscribePromise 的回调，不要放到 new Promise 内部，因为它可能会报错，这个错需要保持是同步的
  broadcast<IPayloadBroadcastPromise<P>>(type, {
    payload,
    _dismiss_
  });
    
  return new Promise<T>((resolve, reject) => {
    // subscribePromise 的回调返回的是 Promise，它 resolve 或 reject 都会广播一个以 _dismiss_ 为类型的 message，
    // 这里使用单次订阅是因为这个 message 只需要消费一次。
    subscribeOnce<IPayloadBroadcastPromiseBack<T>>(_dismiss_, (payloadBack?: IPayloadBroadcastPromiseBack<T>): void => {
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
