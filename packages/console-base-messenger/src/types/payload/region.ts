import {
  SettingsRegionItem,
  SettingsRegionGroup
} from '@alicloud/console-base-common-typings';

export interface IPayloadRegion extends SettingsRegionItem {}

export interface IPayloadRegionOnChange extends IPayloadRegion {
  correctedFrom?: string;
}

export interface IPayloadRegionGroup extends SettingsRegionGroup {}
