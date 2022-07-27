/* --------------------------------------------- *
 * 控制台调用
 * 
 * 具体的实现由 console-base 对 console-base-subscribe 中的 `on同名方法` 传入回调完成
 * --------------------------------------------- */

export { default as setProductId } from './misc/set-product-id';
export { default as promptError } from './misc/prompt-error';
export { default as fetcherRequest } from './misc/fetcher-request';
export { default as toggleTopNav } from './misc/toggle-top-nav';
export { default as armsError } from './misc/arms-error';
export { default as launchWidget } from './misc/launch-widget';

/* ********************************************
 * 工具组
 ******************************************* */
export { default as setGoTopContainer } from './toolkit/set-go-top-container';
export { default as putToolkitItem } from './toolkit/put-toolkit-item';
export { default as removeToolkitItem } from './toolkit/remove-toolkit-item';

/* ********************************************
 * 微文档
 ******************************************* */
export { default as openHelp } from './help/open-help';