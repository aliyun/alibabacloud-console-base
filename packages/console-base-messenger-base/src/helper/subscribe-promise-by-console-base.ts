import {
  Unsubscribe,
  subscribePromise
} from '@alicloud/post-message';

/**
 * ConsoleBase 订阅 Promise 消息，仅限定 type，不需要记录日志
 */
export default function subscribePromiseByConsoleBase<T = void, P = void>(type: string, fn: (payload: P) => (T | Promise<T>)): Unsubscribe {
  return subscribePromise(type, fn);
}
