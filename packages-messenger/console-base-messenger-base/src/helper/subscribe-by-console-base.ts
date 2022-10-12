import {
  Unsubscribe,
  subscribe
} from '@alicloud/post-message';

/**
 * ConsoleBase 订阅消息，不需要记录日志
 */
export default function subscribeByConsoleBase<P = void>(type: string, fn: (payload: P) => void): Unsubscribe {
  return subscribe(type, fn);
}