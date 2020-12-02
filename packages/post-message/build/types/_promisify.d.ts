/**
 * 广播事件，返回 Promise，必须要有 subscribePromise 来承接该事件，否则此 Promise 将永远无法结束
 */
export declare function broadcastPromise<T = void, P = void>(type: string, payload?: P): Promise<T>;
/**
 * 对 broadcastPromise 对应的 type 进行响应，这里关心的 payload 还是 broadcastPromise 所传入的 payload
 */
export declare function subscribePromise<T = void, P = void>(type: string, fn: (payload: P) => T | Promise<T>): () => void;
