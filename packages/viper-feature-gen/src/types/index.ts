export interface IFeatureCheckAttributes {
  region?: string;
  [k: string]: string;
}

export interface IFnFeatureCheck {
  (key: string): boolean;
  (key: string, region: string): boolean;
  (key: string, attributes: IFeatureCheckAttributes): boolean;
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
