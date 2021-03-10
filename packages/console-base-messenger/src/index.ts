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
} from './const';

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
  IPayloadResourceGroup as MessengerResourceGroup,
  /**
   * @deprecated MessengerPayloadTutorial
   */
  IPayloadLaunchTutorial as MessengerTutorial,
  // TODO 废弃上边的
  IPayloadRegion as MessengerPayloadRegion,
  IPayloadRegionOnChange as MessengerPayloadRegionOnChange,
  IPayloadRegionGroup as MessengerPayloadRegionGroup,
  IPayloadResourceGroup as MessengerPayloadResourceGroup,
  IPayloadLaunchTutorial as MessengerPayloadTutorial,
  IPayloadTutorRegister as MessengerPayloadTutorRegister,
  IPayloadTutorOpen as MessengerPayloadTutorOpen,
  IPayloadTutorStepChange as MessengerPayloadTutorStepChange,
  IPayloadTutorDismiss as MessengerPayloadTutorDismiss
} from './types';
