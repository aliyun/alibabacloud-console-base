/* --------------------------------------------- *
 * console-base 调用：通知控制台应用
 * 
 * 由 app-subscribe 下的方法响应
 * --------------------------------------------- */

export { default as themeChange } from './theme-change';

/* ********************************************
 * 微售卖
 ******************************************* */
export { default as fastbuyClose } from './fastbuy/fastbuy-close';
export { default as fastbuyBuy } from './fastbuy/fastbuy-buy';
export { default as fastbuySubmitPayment } from './fastbuy/fastbuy-submit-payment';
export { default as fastbuyOrderFinish } from './fastbuy/fastbuy-order-finish';