import {
  TSettingsIntlString
} from './settings-common';

/* ---- CONSOLE_BASE_SETTINGS.REGION 类型 ---- */

/**
 * 原始 REGION.regions 元素的类型
 */
export interface ISettingsRawRegionItem {
  id: string;
  name: TSettingsIntlString;
  disabled?: boolean;
}

/**
 * 原始 REGION.regionGroups 元素的类型
 */
export interface ISettingsRawRegionGroup {
  name: TSettingsIntlString;
  regions: ISettingsRawRegionItem[];
}

/**
 * 消化了 name 的 REGION.regions 元素的类型
 */
export interface ISettingsRegionItem extends Omit<ISettingsRawRegionItem, 'name'> {
  name: string;
}

/**
 * 消化了 name 的 REGION.regionGroups 元素的类型
 */
export interface ISettingsRegionGroup extends Omit<ISettingsRawRegionGroup, 'name' | 'regions'> {
  name: string;
  regions: ISettingsRegionItem[];
}

/**
 * 原始 REGION 配置对象的类型
 */
export interface ISettingsRawRegion {
  regions?: ISettingsRawRegionItem[];
  regionGroups?: ISettingsRawRegionGroup[];
  regionIdDefault?: string;
  visible?: boolean;
  global?: boolean;
  noFlag?: boolean;
  noGroup?: boolean;
  legacyRegionIds?: string[];
  legacyDropUnusableRegions?: boolean;
  resourceCountRefresh?: boolean;
}

/**
 * 消化了 name 的 REGION 配置对象的类型
 */
export interface ISettingsRegion extends Omit<ISettingsRawRegion, 'regionGroups' | 'regions'> {
  regions?: ISettingsRegionItem[];
  regionGroups?: ISettingsRegionGroup[];
}
