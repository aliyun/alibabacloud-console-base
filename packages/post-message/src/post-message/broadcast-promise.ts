import {
  IPayloadBroadcastPromise,
  IPayloadBroadcastPromiseBack
} from '../types';
import {
  buildPayloadForPromise,
  plainToError
} from '../util';

import broadcast from './broadcast';
import subscribeOnce from './subscribe-once';

function broadcastPromise<T = void>(type: string): Promise<T>;
function broadcastPromise<T, P>(type: string, payload: P): Promise<T>;

/**
 * 广播事件，返回 Promise，必须要有 subscribePromise 来承接该事件，否则此 Promise 将永远无法结束
 */
function broadcastPromise<T, P>(type: string, payload?: P): Promise<T> {
  const payloadForPromise = buildPayloadForPromise<P | undefined>(type, payload);
  
  // 这里会触发 subscribePromise 的回调，不要放到 new Promise 内部，因为它可能会报错，这个错需要保持是同步的
  broadcast<IPayloadBroadcastPromise<P | undefined>>(type, payloadForPromise);
  
  return new Promise<T>((resolve, reject) => {
    // subscribePromise 的回调返回的是 Promise，它 resolve 或 reject 都会广播一个以 _dismiss_ 为类型的 message，
    // 这里使用单次订阅是因为这个 message 只需要消费一次。
    subscribeOnce<IPayloadBroadcastPromiseBack<T>>(payloadForPromise._dismiss_, (payloadBack?: IPayloadBroadcastPromiseBack<T>): void => {
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

export default broadcastPromise;