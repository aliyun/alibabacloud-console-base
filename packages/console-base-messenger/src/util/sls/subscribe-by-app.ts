import sls from '@alicloud/console-base-log-sls';

import stringifyCallback from '../stringify-callback';

type TAnyFunction = (...args: unknown[]) => unknown;

/**
 * 记录 console-base 发出的消息，应用感兴趣主动订阅的，subscribe 或 subscribeOnce
 */
export default function slsSubscribeByApp(type: string, fn: TAnyFunction): void {
  sls('message_subscribe_by_app', {
    name: type,
    value: stringifyCallback(fn) // 可以判断有效性
  });
}
