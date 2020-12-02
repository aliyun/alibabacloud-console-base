import { EMessageBroadcastByApp } from '../const';
/**
 * 应用发消息，需要记录日志
 */
export declare function broadcastByApp<P = void>(type: EMessageBroadcastByApp | string, payload?: P): void;
/**
 * 应用发 Promise 消息，需要记录日志
 */
export declare function broadcastPromiseByApp<T = void, P = void>(type: EMessageBroadcastByApp, payload: P): Promise<T>;
