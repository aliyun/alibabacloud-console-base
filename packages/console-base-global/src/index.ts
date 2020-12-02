import {
  forApp
} from '@alicloud/console-base-messenger';

interface IConsoleBase {
  forApp: typeof forApp; // 只会给应用使用，应用将通过 window 来间接得到它
  PROXY_ERROR_PROMPT: boolean; // 代理 error-prompt
  PROXY_FETCHER: boolean; // 代理 fetcher
}

interface IWindowWithConsoleBase extends Window {
  ConsoleBase?: IConsoleBase; // 这个全局变量的名字不要轻易变，因为它会被应用直接使用（应用不会通过这个包）
}

/**
 * 内部对象，有可能会被设置到 window.ConsoleBase
 */
const InnerGlobal: IConsoleBase = {
  forApp,
  PROXY_ERROR_PROMPT: false,
  PROXY_FETCHER: false
};

/**
 * 获取 window 上的全局变量
 */
function getGlobalVar(): IConsoleBase | undefined {
  return (window as IWindowWithConsoleBase).ConsoleBase;
}

/**
 * 获取 window 上的全局变量或内部的（内部的有可能会变成全局变量）
 */
function getGlobalVarOrInnerGlobal(): IConsoleBase {
  return getGlobalVar() || InnerGlobal;
}

/**
 * 这个包不会去设置全局变量，而是由 ConsoleBase 主体代码来设置
 */
export function setGlobalVar(): void {
  const globalVar = getGlobalVar();
  
  if (globalVar === InnerGlobal) {
    return;
  }
  
  if (globalVar) {
    throw new Error('[@alicloud/console-base-global] cannot re-set the global variable with a different object');
  }
  
  (window as IWindowWithConsoleBase).ConsoleBase = InnerGlobal;
}

/* --------------------------------------------------------------------
 * 以下提供获取和设置全局变量下的某属性的方法，getter 和 setter 的策略有所区别。
 * 
 * - setter - 如果 window 下全局对象已设置，设到全局变量；未设置则设到 InnerGlobal，所以此时用 getGlobalVarOrInnerGlobal().xx = x
 * - getter - 仅获取 window 下全局对象中的值；若全局对象未设置，将可能得到 undefined，此时用 getGlobalVar()?.xx
 * -------------------------------------------------------------------- */

/**
 * 设置是否开启错误提示代理
 */
export function setProxyErrorPrompt(yes = true): void {
  getGlobalVarOrInnerGlobal().PROXY_ERROR_PROMPT = yes;
}

/**
 * 获取 window 下全局变量中的错误提示代理
 */
export function getProxyErrorPrompt(): boolean {
  return getGlobalVar()?.PROXY_ERROR_PROMPT || false;
}

/**
 * 设置是否开启 fetcher 代理
 */
export function setProxyFetcher(yes = true): void {
  getGlobalVarOrInnerGlobal().PROXY_FETCHER = yes;
}

/**
 * 获取 window 下全局变量中的 fetcher 代理
 */
export function getProxyFetcher(): boolean {
  return getGlobalVar()?.PROXY_FETCHER || false;
}
