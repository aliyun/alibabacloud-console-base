export interface IFnConfFeature<K = string> {
  (key: K): boolean;
  (key: K, region: string): boolean;
  (key: K, attributes: Record<string, string>): boolean;
}

export interface IFeatureItem {
  status: boolean;
  attribute?: {
    regions?: string[];
    customAttrs?: Record<string, string>;
  };
}

export interface ICheckItem {
  value: string;
  mixedList: string[];
}
