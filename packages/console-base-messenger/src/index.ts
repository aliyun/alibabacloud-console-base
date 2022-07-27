import {
  ready,
  onReady
} from '@alicloud/console-base-messenger-base';
import {
  setRegionGroups,
  setRegionId,
  setRegionResourceCount,
  setRegions,
  toggleRegion,
  toggleRegionGlobal,
  onRegionChange
} from '@alicloud/console-base-messenger-region';
import {
  toggleResourceGroup,
  setResourceGroupId,
  setResourceGroupResourceCount,
  onResourceGroupChange,
  onResourceGroupDataLoaded
} from '@alicloud/console-base-messenger-resource-group';
import {
  registerTutor,
  openTutor,
  closeTutor,
  onTutorAction,
  onTutorDismiss,
  onTutorStepChange
} from '@alicloud/console-base-messenger-tutor';

import * as appBroadcast from './messenger/app-broadcast';
import * as appSubscribe from './messenger/app-subscribe';

export * from '@alicloud/console-base-messenger-region';
export * from '@alicloud/console-base-messenger-resource-group';
export * from '@alicloud/console-base-messenger-micro-browser-portal';
export * from '@alicloud/console-base-messenger-pref';
export * from '@alicloud/console-base-messenger-tutor';

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
 *
 * @deprecated 请使用直接 export
 */
export const forApp = {
  ...appBroadcast,
  ...appSubscribe,
  onReady,
  // region - 不再新增
  setRegionGroups,
  setRegionId,
  setRegionResourceCount,
  setRegions,
  toggleRegion,
  toggleRegionGlobal,
  onRegionChange,
  // resource-group - 不再新增
  toggleResourceGroup,
  setResourceGroupId,
  setResourceGroupResourceCount,
  onResourceGroupChange,
  onResourceGroupDataLoaded,
  // tutor - 不再新增
  registerTutor,
  openTutor,
  closeTutor,
  onTutorAction,
  onTutorDismiss,
  onTutorStepChange
};