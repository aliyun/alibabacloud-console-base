export interface IPayloadRegion {
  id: string;
  name: string;
  disabled?: boolean;
}

export interface IPayloadRegionGroup {
  name: string;
  regions: IPayloadRegion[];
}

export interface IPayloadRegionOnChange extends IPayloadRegion {
  correctedFrom?: string;
}
