import {
  FetcherFnInterceptRequest,
  FetcherInterceptRequestReturn,
  FetcherUtils
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtended
} from '../types';

import parseOptions from './parse-options';
import mergerAdd from './merger/add';
import mergerGet from './merger/get';

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
      
      throw FetcherUtils.createErrorSkipNetwork(promise, fetcherConfig);
    } else {
      mergerAdd(key);
    }
  };
}
