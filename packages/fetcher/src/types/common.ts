/**
 * 表示 `() => void` 类型
 */
export type TFnVoid = () => void;

export interface IInterceptorQueueItem<F = void, R = void> {
  priority?: number;
  fulfilledFn?: F;
  rejectedFn?: R;
}