export interface IOnChange<T> {
  (value: T): void;
}

export type THookReturn<T> = [T, IOnChange<T>];