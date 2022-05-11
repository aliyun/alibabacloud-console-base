import getGlobalVar from './get-global-var';

/**
 * 设置是否开启 fetcher 代理
 */
export default function setProxyFetcher(yes = true): void {
  getGlobalVar().PROXY_FETCHER = yes;
}