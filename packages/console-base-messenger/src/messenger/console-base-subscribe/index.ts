import onPromptError from './misc/on-prompt-error';
import onFetcherRequest from './misc/on-fetcher-request';
import onToggleTopNav from './misc/on-toggle-top-nav';
import onArmsError from './misc/on-arms-error';
import onLaunchTutorial from './misc/on-launch-tutorial';
import onLaunchWidget from './misc/on-launch-widget';
import onToggleRegion from './region/on-toggle-region';
import onToggleRegionGlobal from './region/on-toggle-region-global';
import onSetRegionId from './region/on-set-region-id';
import onSetRegions from './region/on-set-regions';
import onSetRegionGroups from './region/on-set-region-groups';
import onSetRegionResourceCount from './region/on-set-region-resource-count';
import onToggleResourceGroup from './resource-group/on-toggle-resource-group';
import onSetResourceGroupId from './resource-group/on-set-resource-group-id';
import onSetResourceGroupResourceCount from './resource-group/on-set-resource-group-resource-count';
import onSetGoTopContainer from './toolkit/on-set-go-top-container';
import onToolkitPut from './toolkit/on-toolkit-put';
import onToolkitRemove from './toolkit/on-toolkit-remove';
import onRegisterTutor from './tutor/on-register';
import onOpenTutor from './tutor/on-open';
import onCloseTutor from './tutor/on-close';

/* --------------------------------------------- *
 * console-base 必须实现这里所有事件的处理
 * 
 * 响应控制台对 console-base-broadcast 下对应的方法
 * --------------------------------------------- */
export default {
  onPromptError,
  onFetcherRequest,
  onToggleTopNav,
  onArmsError,
  onLaunchTutorial,
  onLaunchWidget,
  onToggleRegion,
  onToggleRegionGlobal,
  onSetRegionId,
  onSetRegions,
  onSetRegionGroups,
  onSetRegionResourceCount,
  onToggleResourceGroup,
  onSetResourceGroupId,
  onSetResourceGroupResourceCount,
  onSetGoTopContainer,
  onToolkitPut,
  onToolkitRemove,
  onRegisterTutor,
  onOpenTutor,
  onCloseTutor
};
