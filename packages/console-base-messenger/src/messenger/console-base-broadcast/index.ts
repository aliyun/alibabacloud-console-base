/* --------------------------------------------- *
 * console-base 调用：通知控制台应用
 * 
 * 由 app-subscribe 下的方法响应
 * --------------------------------------------- */

export { default as themeChange } from './theme-change';

/* ********************************************
 * 工具组
 ******************************************* */
export { default as toolkitToolClicked } from './toolkit/toolkit-tool-clicked';
export { default as toolkitToolActiveChanged } from './toolkit/toolkit-tool-active-change';
export { default as toolkitTooltipClose } from './toolkit/toolkit-tooltip-close';

/* ********************************************
 * 微售卖
 ******************************************* */
export { default as fastbuyClose } from './fastbuy/fastbuy-close';
export { default as fastbuyBuy } from './fastbuy/fastbuy-buy';
export { default as fastbuySubmitPayment } from './fastbuy/fastbuy-submit-payment';
export { default as fastbuyOrderFinish } from './fastbuy/fastbuy-order-finish';

/* ********************************************
 * 微教程
 ******************************************* */
export { default as tutorStepChange } from './tutor/step-change';
export { default as tutorAction } from './tutor/action';
export { default as tutorDismiss } from './tutor/dismiss';

/* ********************************************
 * 微偏好
 ******************************************* */
export { default as microPrefUpdated } from './micro-pref/micro-pref-updated';