import onPromptError from './on-prompt-error';
import onFetcherRequest from './on-fetcher-request';
import onToggleTopNav from './on-toggle-top-nav';
import onLaunchTutorial from './on-launch-tutorial';
import onLaunchWidget from './on-launch-widget';
import onToggleRegion from './on-toggle-region';
import onToggleRegionGlobal from './on-toggle-region-global';
import onSetRegionId from './on-set-region-id';
import onSetRegions from './on-set-regions';
import onSetRegionGroups from './on-set-region-groups';
import onSetRegionResourceCount from './on-set-region-resource-count';
import onToggleResourceGroup from './on-toggle-resource-group';
import onSetResourceGroupId from './on-set-resource-group-id';
import onSetResourceGroupResourceCount from './on-set-resource-group-resource-count';
import onSetGoTopContainer from './on-set-go-top-container';
import onToolkitPut from './on-toolkit-put';
import onToolkitRemove from './on-toolkit-remove';
/* --------------------------------------------- *
 * console-base 必须实现这里所有事件的处理
 * 
 * 响应控制台对 console-base-broadcast 下对应的方法
 * --------------------------------------------- */

export default {
  onPromptError: onPromptError,
  onFetcherRequest: onFetcherRequest,
  onToggleTopNav: onToggleTopNav,
  onLaunchTutorial: onLaunchTutorial,
  onLaunchWidget: onLaunchWidget,
  onToggleRegion: onToggleRegion,
  onToggleRegionGlobal: onToggleRegionGlobal,
  onSetRegionId: onSetRegionId,
  onSetRegions: onSetRegions,
  onSetRegionGroups: onSetRegionGroups,
  onSetRegionResourceCount: onSetRegionResourceCount,
  onToggleResourceGroup: onToggleResourceGroup,
  onSetResourceGroupId: onSetResourceGroupId,
  onSetResourceGroupResourceCount: onSetResourceGroupResourceCount,
  onSetGoTopContainer: onSetGoTopContainer,
  onToolkitPut: onToolkitPut,
  onToolkitRemove: onToolkitRemove
};