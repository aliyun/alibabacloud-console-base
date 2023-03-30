export interface IOnChange<T, A extends Array<unknown> = []> {
  (value: T, ...args: A): void; // args 允许透传额外参数
}

export type THookReturn<T, A extends Array<unknown> = []> = [T, IOnChange<T, A>];
