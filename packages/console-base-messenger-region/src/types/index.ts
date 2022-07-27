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

export interface IPayloadRegionResourceCount {
  [k: string]: number;
}

export interface IPayloadRegionProps {
  // 数据
  regionId?: string;
  regionIdDefault?: string;
  regions?: IPayloadRegion[];
  resourceCount?: IPayloadRegionResourceCount;
  legacyRegionIds?: string[];
  // 展示
  visible?: boolean;
  disabled?: boolean;
  global?: boolean;
  noGroup?: boolean;
}

/**
 * 应用主动触发地域的 OU 探测时，必需地域的 id 和名称，可选传商品码
 */
export interface IPayloadRegionTriggerOuDetection {
  regionId: string;
  regionName: string;
  commodityCode?: string;
}
