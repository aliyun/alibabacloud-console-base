/* --------------------------------------------- *
 * 控制台调用
 * 
 * 具体的实现由 console-base 对 console-base-subscribe 中的 `on同名方法` 传入回调完成
 * --------------------------------------------- */

export { default as promptError } from './misc/prompt-error';
export { default as fetcherRequest } from './misc/fetcher-request';
export { default as toggleTopNav } from './misc/toggle-top-nav';
export { default as armsError } from './misc/arms-error';
export { default as launchTutorial } from './misc/launch-tutorial';
export { default as launchWidget } from './misc/launch-widget';
export { default as setRegionProps } from './region/set-region-props';
export { default as toggleRegion } from './region/toggle-region';
export { default as toggleRegionGlobal } from './region/toggle-region-global';
export { default as setRegionId } from './region/set-region-id';
export { default as setRegions } from './region/set-regions';
export { default as setRegionGroups } from './region/set-region-groups';
export { default as setRegionResourceCount } from './region/set-region-resource-count';
export { default as toggleResourceGroup } from './resource-group/toggle-resource-group';
export { default as setResourceGroupId } from './resource-group/set-resource-group-id';
export { default as setResourceGroupResourceCount } from './resource-group/set-resource-group-resource-count';
export { default as setGoTopContainer } from './toolkit/set-go-top-container';
export { default as putToolkitItem } from './toolkit/put-toolkit-item';
export { default as removeToolkitItem } from './toolkit/remove-toolkit-item';
export { default as registerTutor } from './tutor/register';
export { default as openTutor } from './tutor/open';
export { default as closeTutor } from './tutor/close';
export { default as microBrowserPortalCreated } from './micro-browser-portal/created';
export { default as microBrowserPortalRemoved } from './micro-browser-portal/removed';
export { default as microBrowserPortalToggleVisible } from './micro-browser-portal/toggle-visible';