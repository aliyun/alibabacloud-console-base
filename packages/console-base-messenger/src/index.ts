import {
  IPayloadRegion as MessengerRegion,
  IPayloadRegionOnChange as MessengerRegionOnChange,
  IPayloadRegionGroup as MessengerRegionGroup,
  IPayloadResourceGroup as MessengerResourceGroup,
  IPayloadLaunchTutorial as MessengerTutorial
} from './types';
import {
  EToolkitIdSystem
} from './const';
import appBroadcast from './messenger/app-broadcast';
import appSubscribe from './messenger/app-subscribe';
import consoleBaseBroadcast from './messenger/console-base-broadcast';
import consoleBaseSubscribe from './messenger/console-base-subscribe';

/**
 * 给控制台使用
 */
export const forApp = {
  ...appBroadcast,
  ...appSubscribe
};

/**
 * 给 console-base 使用
 */
export const forConsoleBase = {
  ...consoleBaseBroadcast,
  ...consoleBaseSubscribe
};

export {
  EToolkitIdSystem
};

export type {
  MessengerRegion,
  MessengerRegionOnChange,
  MessengerRegionGroup,
  MessengerResourceGroup,
  MessengerTutorial
};
