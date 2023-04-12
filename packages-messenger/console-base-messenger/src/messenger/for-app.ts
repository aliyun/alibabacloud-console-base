import {
  onReady
} from '@alicloud/console-base-messenger-base';
import {
  toggleVisible,
  onToggleVisible
} from '@alicloud/console-base-messenger-top-nav';
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
  setGoTopContainer,
  putToolkitItem,
  removeToolkitItem,
  onToolkitItemClick,
  onToolkitVersionNewClick,
  onToolkitVersionOldClick,
  onToolkitItemActiveChange,
  onToolkitTooltipClose
} from '@alicloud/console-base-messenger-toolkit';
import {
  registerTutor,
  openTutor,
  closeTutor,
  onTutorAction,
  onTutorDismiss,
  onTutorStepChange
} from '@alicloud/console-base-messenger-tutor';
import {
  promptError
} from '@alicloud/console-base-messenger-error-prompt';

import * as appBroadcast from './app-broadcast';
import * as appSubscribe from './app-subscribe';

/**
 * 给控制台使用
 *
 * @deprecated 不再新增，请使用直接 export
 */
export default {
  ...appBroadcast,
  ...appSubscribe,
  onReady,
  // top-nav
  toggleTopNav: toggleVisible,
  onToggleTopNav: onToggleVisible,
  // region
  setRegionGroups,
  setRegionId,
  setRegionResourceCount,
  setRegions,
  toggleRegion,
  toggleRegionGlobal,
  onRegionChange,
  // resource-group
  toggleResourceGroup,
  setResourceGroupId,
  setResourceGroupResourceCount,
  onResourceGroupChange,
  onResourceGroupDataLoaded,
  // toolkit
  setGoTopContainer,
  putToolkitItem,
  removeToolkitItem,
  onToolkitItemClick,
  onToolkitVersionNewClick,
  onToolkitVersionOldClick,
  onToolkitItemActiveChange,
  onToolkitTooltipClose,
  // tutor
  registerTutor,
  openTutor,
  closeTutor,
  onTutorAction,
  onTutorDismiss,
  onTutorStepChange,
  // error prompt
  promptError
};
