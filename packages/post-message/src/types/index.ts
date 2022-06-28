export interface IAnyCallback {
  (...args: any[]): void; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export type TReceivers = Record<string, IAnyCallback[] | undefined>;

/**
 * 以 promise 的形式广播事件的时候的 payload 包裹
 */
export interface IPayloadBroadcastPromise<P = void> {
  payload: P; // 原 payload
  _dismiss_: string; // subscribePromise 中会将此包裹打开，如果里边有该值，表明此事件合法，否则不会响应
}

/**
 * broadcastPromise 和 subscribePromise 的纽带
 */
export interface IPayloadBroadcastPromiseBack<T> {
  value?: T;
  error?: Record<string, unknown>; // 可能是 string、对象或 Error
}
