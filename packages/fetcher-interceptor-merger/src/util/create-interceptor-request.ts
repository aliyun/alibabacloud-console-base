import {
  FetcherFnInterceptRequest,
  FetcherInterceptRequestReturn,
  createFetcherErrorSkipNetwork
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtended
} from '../types';

import parseOptions from './parse-options';
import {
  mergerGet,
  mergerAdd
} from './merger';

export default function createInterceptorRequest(): FetcherFnInterceptRequest<IFetcherConfigExtended> {
  return (fetcherConfig: IFetcherConfigExtended): FetcherInterceptRequestReturn<IFetcherConfigExtended> => {
    const merger = parseOptions(fetcherConfig);
    
    fetcherConfig.merger = merger; // 保证 response 拿到的 merger 是对象或 null
    
    // 不需要，直接跳过，将继续请求
    if (!merger) {
      return;
    }
    
    const {
      key
    } = merger;
    const queue = mergerGet(key);
    
    // 第 0 个请求还在请求中，则附之
    if (queue) {
      const promise = new Promise((resolve, reject) => queue.push({
        resolve,
        reject
      }));
      
      throw createFetcherErrorSkipNetwork(promise, fetcherConfig);
    } else {
      mergerAdd(key);
    }
  };
}
