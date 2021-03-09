import {
  SettingsToolkitItem
} from '@alicloud/console-base-common-typings';

export * from './payload/region';
export * from './payload/resource-group';
export * from './payload/tutor';

export interface IPayloadLaunchTutorial { // will be deprecated soon
  title?: string;
  contents: string[];
  width?: number;
  step?: number;
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
