import { EMessageBroadcastByApp } from '../const';
/**
 * ConsoleBase 订阅消息，仅限定 type，不需要记录日志
 */
export default function subscribeByConsoleBase<P = void>(type: EMessageBroadcastByApp | string, fn: (payload?: P) => void): () => void;
/**
 * ConsoleBase 订阅 Promise 消息，仅限定 type，不需要记录日志
 */
export declare function subscribePromiseByConsoleBase<T = void, P = void>(type: EMessageBroadcastByApp | string, fn: (payload: P) => Promise<T>): () => void;
