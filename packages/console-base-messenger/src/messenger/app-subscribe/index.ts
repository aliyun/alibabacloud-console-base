/* --------------------------------------------- *
 * 控制台应用调用：响应 console-base 通知
 * 
 * 响应 console-base-broadcast 下对应的方法
 * --------------------------------------------- */

export { default as onThemeChange } from './on-theme-change';

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