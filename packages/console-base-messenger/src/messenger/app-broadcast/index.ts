/* --------------------------------------------- *
 * 控制台调用
 * 
 * 具体的实现由 console-base 对 console-base-subscribe 中的 `on同名方法` 传入回调完成
 * --------------------------------------------- */
export { default as promptError } from './misc/prompt-error';
export { default as fetcherRequest } from './misc/fetcher-request';
export { default as toggleTopNav } from './misc/toggle-top-nav';
export { default as armsError } from './misc/arms-error';
export { default as launchWidget } from './misc/launch-widget';

/* ********************************************
 * 地域选择器
 ******************************************* */
export { default as setRegionProps } from './region/set-region-props';
export { default as mergeRegionProps } from './region/merge-region-props';
export { default as toggleRegion } from './region/toggle-region';
export { default as toggleRegionGlobal } from './region/toggle-region-global';
export { default as setRegionId } from './region/set-region-id';
export { default as setRegions } from './region/set-regions';
export { default as setRegionGroups } from './region/set-region-groups';
export { default as setRegionResourceCount } from './region/set-region-resource-count';
export { default as setRegionOuCommodityCode } from './region/set-region-ou-commodity-code';
export { default as triggerRegionOuDetection } from './region/trigger-region-ou-detection';

/* ********************************************
 * 资源组选择器
 ******************************************* */
export { default as setResourceGroupProps } from './resource-group/set-resource-group-props';
export { default as mergeResourceGroupProps } from './resource-group/merge-resource-group-props';
export { default as toggleResourceGroup } from './resource-group/toggle-resource-group';
export { default as setResourceGroupId } from './resource-group/set-resource-group-id';
export { default as setResourceGroupResourceCount } from './resource-group/set-resource-group-resource-count';

/* ********************************************
 * 工具组
 ******************************************* */
export { default as setGoTopContainer } from './toolkit/set-go-top-container';
export { default as putToolkitItem } from './toolkit/put-toolkit-item';
export { default as removeToolkitItem } from './toolkit/remove-toolkit-item';

/* ********************************************
 * 微教程
 ******************************************* */
export { default as registerTutor } from './tutor/register';
export { default as openTutor } from './tutor/open';
export { default as closeTutor } from './tutor/close';

/* ********************************************
 * 微偏好
 ******************************************* */
export { default as toggleMicroPref } from './micro-pref/toggle';

/* ********************************************
 * 微浏览器传送门
 ******************************************* */
export { default as microBrowserPortalCreated } from './micro-browser-portal/created';
export { default as microBrowserPortalRemoved } from './micro-browser-portal/removed';
export { default as microBrowserPortalToggleVisible } from './micro-browser-portal/toggle-visible';