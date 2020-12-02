import { EMessageBroadcastByConsoleBase } from '../const';
/**
 * 应用订阅消息，需要记录日志
 */
export default function subscribeByApp<P = void>(type: EMessageBroadcastByConsoleBase | string, fn: (payload?: P) => void): () => void;
/**
 * 应用订阅单次消息，需要记录日志
 */
export declare function subscribeOnceByApp<P = void>(type: EMessageBroadcastByConsoleBase | string, fn: (payload?: P) => void): () => void;
