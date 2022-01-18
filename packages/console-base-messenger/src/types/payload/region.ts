export interface IPayloadRegion {
  id: string;
  name: string;
  disabled?: boolean;
}

export interface IPayloadRegionGroup {
  key: string;
  name: string;
  regions: IPayloadRegion[];
}

export interface IPayloadRegionOnChange extends IPayloadRegion {
  correctedFrom?: string;
}

export interface IPayloadRegionProps {
  // 数据
  regionId?: string;
  regionIdDefault?: string;
  regions?: IPayloadRegion[];
  resourceCount?: Record<string, number>;
  legacyRegionIds?: string[];
  // 展示
  visible?: boolean;
  disabled?: boolean;
  global?: boolean;
  noGroup?: boolean;
}
