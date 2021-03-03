import _isEmpty from 'lodash/isEmpty';

import {
  IFnConsoleApi,
  IFnConsoleApiMulti,
  IConsoleApiOptions
} from '../types';
import AutoMultiQueue from '../util/auto-multi-queue';

/**
 * 对接口进行自动合并，当 product + region 相同的时候
 * 
 * 目前仅对 OpenAPI 可用，因为 OneConsole 的后端并不支持另外方式
 */
export default function createApiAutoMulti(api: IFnConsoleApi, apiMulti: IFnConsoleApiMulti): IFnConsoleApi {
  const QUEUE_MAPPED_BY_PRODUCT_AND_REGION: Record<string, AutoMultiQueue> = {};
  
  // 不要提出去做静态的方法，因为它跟 api + apiMulti 紧密相连
  function getAutoMultiQueue(product: string, region: string | undefined): AutoMultiQueue {
    const key: string = region ? `P=${product}~R=${region}` : product;
    const queue = QUEUE_MAPPED_BY_PRODUCT_AND_REGION[key];
    
    if (queue) {
      return queue;
    }
    
    const o: AutoMultiQueue = new AutoMultiQueue(product, region, api, apiMulti);
    
    QUEUE_MAPPED_BY_PRODUCT_AND_REGION[key] = o;
    
    return o;
  }
  
  function pushToQueue<T = void>(product: string, action: string, params?: unknown, region?: string): Promise<T> {
    const theQueue = getAutoMultiQueue(product, region);
    
    return theQueue.push<T>(action, params);
  }
  
  return function apiWithAutoMulti<T = void, P = void>(product: string, action: string, params?: P, {
    autoMulti = true,
    region,
    ...options // roa 和其他 fetcher 参数
  }: IConsoleApiOptions = {}): Promise<T> {
    /**
     * 直接调用：
     * 
     * 1. 显式地说我不要 autoMulti
     * 2. 带 roa 参数或其他自定义参数（我不知道 roa 参数有什么效用，实际运用也不多，所以不 auto，其他的任何参数也无法确认有任何副作用）
     */
    if (!autoMulti || !_isEmpty(options)) {
      return api<T, P>(product, action, params, options);
    }
    
    return pushToQueue<T>(product, action, params, region);
  };
}
