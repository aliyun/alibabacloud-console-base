/* --------------------------------------------- *
 * console-base 必须实现这里所有事件的处理
 * 
 * 响应控制台对 console-base-broadcast 下对应的方法
 * --------------------------------------------- */

export { default as onPromptError } from './misc/on-prompt-error';
export { default as onFetcherRequest } from './misc/on-fetcher-request';
export { default as onToggleTopNav } from './misc/on-toggle-top-nav';
export { default as onArmsError } from './misc/on-arms-error';
export { default as onLaunchTutorial } from './misc/on-launch-tutorial';
export { default as onLaunchWidget } from './misc/on-launch-widget';

/* ********************************************
 * 地域选择器
 ******************************************* */
export { default as onSetRegionProps } from './region/on-set-region-props';
export { default as onMergeRegionProps } from './region/on-merge-region-props';
export { default as onToggleRegion } from './region/on-toggle-region';
export { default as onToggleRegionGlobal } from './region/on-toggle-region-global';
export { default as onSetRegionId } from './region/on-set-region-id';
export { default as onSetRegions } from './region/on-set-regions';
export { default as onSetRegionGroups } from './region/on-set-region-groups';
export { default as onSetRegionResourceCount } from './region/on-set-region-resource-count';
export { default as onSetRegionOuCommodityCode } from './region/on-set-region-ou-commodity-code';
export { default as onTriggerRegionOuDetection } from './region/on-trigger-region-ou-detection';

/* ********************************************
 * 资源组选择器
 ******************************************* */
export { default as onMergeResourceGroupProps } from './resource-group/on-merge-resource-group-props';
export { default as onSetResourceGroupProps } from './resource-group/on-set-resource-group-props';
export { default as onToggleResourceGroup } from './resource-group/on-toggle-resource-group';
export { default as onSetResourceGroupId } from './resource-group/on-set-resource-group-id';
export { default as onSetResourceGroupResourceCount } from './resource-group/on-set-resource-group-resource-count';

/* ********************************************
 * 工具组
 ******************************************* */
export { default as onSetGoTopContainer } from './toolkit/on-set-go-top-container';
export { default as onToolkitPut } from './toolkit/on-toolkit-put';
export { default as onToolkitRemove } from './toolkit/on-toolkit-remove';

/* ********************************************
 * 微教程
 ******************************************* */
export { default as onRegisterTutor } from './tutor/on-register';
export { default as onOpenTutor } from './tutor/on-open';
export { default as onCloseTutor } from './tutor/on-close';

/* ********************************************
 * 微偏好
 ******************************************* */
export { default as onToggleMicroPref } from './micro-pref/on-toggle';

/* ********************************************
 * 微浏览器传送门
 ******************************************* */
export { default as onMicroBrowserPortalCreated } from './micro-browser-portal/on-created';
export { default as onMicroBrowserPortalRemoved } from './micro-browser-portal/on-removed';
export { default as onMicroBrowserPortalToggleVisible } from './micro-browser-portal/on-toggle-visibie';