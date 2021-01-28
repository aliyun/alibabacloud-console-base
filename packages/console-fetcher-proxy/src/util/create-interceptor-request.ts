import {
  FetcherConfig,
  FetcherFnInterceptRequest,
  FetcherUtils
} from '@alicloud/console-fetcher';
import {
  forApp
} from '@alicloud/console-base-messenger';
import {
  getProxyFetcher
} from '@alicloud/console-base-global';

export default function createInterceptorRequest(): FetcherFnInterceptRequest<FetcherConfig> {
  return (config: FetcherConfig): Partial<FetcherConfig> | void => {
    if (!getProxyFetcher()) {
      return; // 将继续正常的请求流程
    }
    
    let result: Promise<unknown>;
    
    try { // postMessage 可能抛错
      result = forApp.fetcherRequest(config);
    } catch (err) { // 抛错表明 message 的 payload 中含有无法序列化的数据
      // TODO log
      return; // 将继续正常的请求流程
    }
    
    throw FetcherUtils.createErrorSkipNetwork(result, config);
  };
}
