import { subscribe, subscribePromise } from '@alicloud/post-message';

/**
 * ConsoleBase 订阅消息，仅限定 type，不需要记录日志
 */
export default function subscribeByConsoleBase(type, fn) {
  return subscribe(type, fn);
}
/**
 * ConsoleBase 订阅 Promise 消息，仅限定 type，不需要记录日志
 */

export function subscribePromiseByConsoleBase(type, fn) {
  return subscribePromise(type, fn);
}