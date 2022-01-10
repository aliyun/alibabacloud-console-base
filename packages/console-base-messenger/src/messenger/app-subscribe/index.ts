/* --------------------------------------------- *
 * 控制台应用调用：响应 console-base 通知
 * 
 * 响应 console-base-broadcast 下对应的方法
 * --------------------------------------------- */

export { default as onReady } from './on-ready';
export { default as onThemeChange } from './on-theme-change';
export { default as onRegionChange } from './region/on-region-change';
export { default as onResourceGroupDataLoaded } from './resource-group/on-resource-group-data-loaded';
export { default as onResourceGroupChange } from './resource-group/on-resource-group-change';
export { default as onToolkitItemClick } from './toolkit/on-toolkit-item-click';
export { default as onToolkitVersionNewClick } from './toolkit/on-toolkit-version-new-click';
export { default as onToolkitVersionOldClick } from './toolkit/on-toolkit-version-old-click';
export { default as onToolkitItemActiveChange } from './toolkit/on-toolkit-item-active-change';
export { default as onFastbuyClose } from './fastbuy/on-fastbuy-close';
export { default as onFastbuyBuy } from './fastbuy/on-fastbuy-buy';
export { default as onFastbuySubmitPayment } from './fastbuy/on-fastbuy-submit-payment';
export { default as onFastbuyOrderFinish } from './fastbuy/on-fastbuy-order-finish';
export { default as onTutorStepChange } from './tutor/on-step-change';
export { default as onTutorAction } from './tutor/on-action';
export { default as onTutorDismiss } from './tutor/on-dismiss';
