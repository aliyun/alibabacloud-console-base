export type TInterpolation = Record<string, string | number | boolean>;

export interface IFnConfLink<K = string> {
  (key: K, interpolation?: TInterpolation, noEncode?: boolean): string;
}
