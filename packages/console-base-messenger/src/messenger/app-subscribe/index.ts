/* --------------------------------------------- *
 * 控制台应用调用：响应 console-base 通知
 * 
 * 响应 console-base-broadcast 下对应的方法
 * --------------------------------------------- */

export { default as onReady } from './on-ready';
export { default as onThemeChange } from './on-theme-change';

/* ********************************************
 * 地域选择器
 ******************************************* */
export { default as onRegionChange } from './region/on-region-change';

/* ********************************************
 * 资源组选择器
 ******************************************* */
export { default as onResourceGroupDataLoaded } from './resource-group/on-resource-group-data-loaded';
export { default as onResourceGroupChange } from './resource-group/on-resource-group-change';

/* ********************************************
 * 工具组
 ******************************************* */
export { default as onToolkitItemClick } from './toolkit/on-toolkit-item-click';
export { default as onToolkitVersionNewClick } from './toolkit/on-toolkit-version-new-click';
export { default as onToolkitVersionOldClick } from './toolkit/on-toolkit-version-old-click';
export { default as onToolkitItemActiveChange } from './toolkit/on-toolkit-item-active-change';
export { default as onToolkitTooltipClose } from './toolkit/on-toolkit-tooltip-close';

/* ********************************************
 * 微售卖
 ******************************************* */
export { default as onFastbuyClose } from './fastbuy/on-fastbuy-close';
export { default as onFastbuyBuy } from './fastbuy/on-fastbuy-buy';
export { default as onFastbuySubmitPayment } from './fastbuy/on-fastbuy-submit-payment';
export { default as onFastbuyOrderFinish } from './fastbuy/on-fastbuy-order-finish';
export { default as onTutorStepChange } from './tutor/on-step-change';

/* ********************************************
 * 微教程
 ******************************************* */
export { default as onTutorAction } from './tutor/on-action';
export { default as onTutorDismiss } from './tutor/on-dismiss';

/* ********************************************
 * 微偏好
 ******************************************* */
export { default as onMicroPrefUpdated } from './micro-pref/on-micro-pref-updated';
