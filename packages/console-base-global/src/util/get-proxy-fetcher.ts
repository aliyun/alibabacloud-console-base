import getGlobalVarFromWindow from './get-global-var-from-window';

/**
 * 获取 window 下全局变量中的 fetcher 代理
 */
export default function getProxyFetcher(): boolean {
  return getGlobalVarFromWindow()?.PROXY_FETCHER || false;
}