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
  regions?: IPayloadRegion[];
  regionId?: string;
  resourceCount?: Record<string, number>;
  legacyRegionIds?: string[];
  visible?: boolean;
  readOnly?: boolean;
  noFlag?: boolean;
  noGroup?: boolean;
}
