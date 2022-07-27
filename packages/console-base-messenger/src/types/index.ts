import {
  SettingsToolkitItem
} from '@alicloud/console-base-types-settings-toolkit';

export interface IPayloadArmsError {
  message: string;
  name?: string;
}

export interface IPayloadLaunchWidget<P = void, E = void> {
  id: string;
  version: string;
  props?: P;
  extra?: E;
}

export interface IPayloadPutTool {
  tool: SettingsToolkitItem;
}

export interface IPayloadFastbuy {
  commodityCode: string;
}
