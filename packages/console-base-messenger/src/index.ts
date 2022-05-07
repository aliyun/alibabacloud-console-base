import {
  ready,
  onReady
} from '@alicloud/console-base-messenger-base';

import * as appBroadcast from './messenger/app-broadcast';
import * as appSubscribe from './messenger/app-subscribe';
import * as consoleBaseBroadcast from './messenger/console-base-broadcast';
import * as consoleBaseSubscribe from './messenger/console-base-subscribe';

export * from './messenger/app-broadcast';
export * from './messenger/app-subscribe';
export * from './messenger/console-base-broadcast';
export * from './messenger/console-base-subscribe';

export {
  ready,
  onReady
};

/**
 * 给控制台使用
 */
export const forApp = {
  ...appBroadcast,
  ...appSubscribe,
  onReady
};

/**
 * 给 console-base 使用
 */
export const forConsoleBase = {
  ...consoleBaseBroadcast,
  ...consoleBaseSubscribe,
  ready
};

export {
  EToolkitIdSystem
} from './enum';

export type {
  IPayloadRegion as MessengerPayloadRegion,
  IPayloadRegionProps as MessengerPayloadRegionProps,
  IPayloadRegionOnChange as MessengerPayloadRegionOnChange,
  IPayloadRegionGroup as MessengerPayloadRegionGroup,
  IPayloadResourceGroup as MessengerPayloadResourceGroup,
  IPayloadResourceGroupProps as MessengerPayloadResourceGroupProps,
  IPayloadTutorRegister as MessengerPayloadTutorRegister,
  IPayloadTutorOpen as MessengerPayloadTutorOpen,
  IPayloadTutorStepChange as MessengerPayloadTutorStepChange,
  IPayloadTutorDismiss as MessengerPayloadTutorDismiss
} from './types';

// TODO 废弃下面的
export type {
  /**
   * @deprecated MessengerPayloadRegion
   */
  IPayloadRegion as MessengerRegion,
  /**
   * @deprecated MessengerPayloadRegionOnChange
   */
  IPayloadRegionOnChange as MessengerRegionOnChange,
  /**
   * @deprecated MessengerPayloadRegionGroup
   */
  IPayloadRegionGroup as MessengerRegionGroup,
  /**
   * @deprecated MessengerPayloadResourceGroup
   */
  IPayloadResourceGroup as MessengerResourceGroup
} from './types';
