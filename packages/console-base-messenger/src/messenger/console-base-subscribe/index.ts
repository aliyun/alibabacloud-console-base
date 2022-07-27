/* --------------------------------------------- *
 * console-base 必须实现这里所有事件的处理
 * 
 * 响应控制台对 console-base-broadcast 下对应的方法
 * --------------------------------------------- */

export { default as onSetProductId } from './misc/on-set-product-id';
export { default as onPromptError } from './misc/on-prompt-error';
export { default as onFetcherRequest } from './misc/on-fetcher-request';
export { default as onToggleTopNav } from './misc/on-toggle-top-nav';
export { default as onArmsError } from './misc/on-arms-error';
export { default as onLaunchWidget } from './misc/on-launch-widget';

/* ********************************************
 * 工具组
 ******************************************* */
export { default as onSetGoTopContainer } from './toolkit/on-set-go-top-container';
export { default as onToolkitPut } from './toolkit/on-toolkit-put';
export { default as onToolkitRemove } from './toolkit/on-toolkit-remove';

/* ********************************************
 * 微文档
 ******************************************* */
export { default as onOpenHelp } from './help/on-open-help';