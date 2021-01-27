export type TConfLinkInterpolationMode = '[]' | '{}' | '${}' | '{{}}' | '<>';

export type TConfLinkInterpolation = Record<string, string | number | boolean>;

export interface IFnConfLink<T> {
  (key: keyof T, interpolation?: TConfLinkInterpolation, noEncode?: boolean): string;
}
