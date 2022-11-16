export interface IFnOnChange<T> {
  (value: T): void;
}

export type THookReturn<T> = [T, IFnOnChange<T>];