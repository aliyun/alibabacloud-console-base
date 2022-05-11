import getGlobalVar from './get-global-var';

/**
 * 设置是否开启错误提示代理
 */
export default function setProxyErrorPrompt(yes = true): void {
  getGlobalVar().PROXY_ERROR_PROMPT = yes;
}