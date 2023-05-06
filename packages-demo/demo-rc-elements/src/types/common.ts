export interface IControllableValue<T = string> {
  value?: T;
  defaultValue?: T;
  onChange?(value: T): void;
}
