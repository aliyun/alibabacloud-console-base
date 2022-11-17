import {
  FetcherConfig,
  FetcherFnInterceptRequest,
  FetcherInterceptRequestReturn,
  createFetcherErrorSkipNetwork
} from '@alicloud/console-fetcher';
import {
  fetcherRequest
} from '@alicloud/console-base-messenger';
import {
  getProxyFetcher
} from '@alicloud/console-base-global';

export default function createInterceptorRequest(): FetcherFnInterceptRequest<FetcherConfig> {
  return (fetcherConfig: FetcherConfig): FetcherInterceptRequestReturn => {
    if (!getProxyFetcher()) {
      return; // 将继续正常请求流程
    }
    
    let result: Promise<unknown>;
    
    try { // postMessage 可能抛错
      result = fetcherRequest(fetcherConfig);
    } catch (err) { // 抛错表明 message 的 payload 中含有无法序列化的数据
      // TODO log
      return; // 将继续正常请求流程
    }
    
    throw createFetcherErrorSkipNetwork(result, fetcherConfig);
  };
}
