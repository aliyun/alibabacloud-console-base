export interface IOnChange<T> {
  (value: T, ...args: unknown[]): void;
}

export type THookReturn<T> = [T, IOnChange<T>];
