import getGlobalVarFromWindow from './get-global-var-from-window';

/**
 * 获取 window 下全局变量中的错误提示代理
 */
export default function getProxyErrorPrompt(): boolean {
  return getGlobalVarFromWindow()?.PROXY_ERROR_PROMPT || false;
}