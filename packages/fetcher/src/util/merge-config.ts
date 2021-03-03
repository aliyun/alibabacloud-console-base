import _forEach from 'lodash/forEach';

import {
  IFetcherConfig
} from '../types';
import normalizeHeaders from '../util/normalize-headers';
import mergeParams from '../util/merge-params';

/**
 * 将多个 fetcherConfig 进行合并
 */
export default function mergeConfig<C extends IFetcherConfig = IFetcherConfig>(fetcherConfig: C, ...args: Partial<C>[]): C {
  const finalConfig: C = {
    ...fetcherConfig
  };
  
  finalConfig.headers = normalizeHeaders(finalConfig.headers);
  
  args.forEach(partialConfig => {
    _forEach(partialConfig, (v, k) => {
      if (v === undefined) {
        return;
      }
      
      switch (k) {
        case 'headers': // header 会做 merge
          finalConfig.headers = {
            ...finalConfig.headers,
            ...normalizeHeaders(v as unknown as Record<string, string>)
          };
          
          break;
        case 'params': // 参数和 body 也会做 merge
          finalConfig.params = mergeParams([finalConfig[k], v]);
          
          break;
        case 'body':
          finalConfig.body = mergeParams([finalConfig[k], v]);
          
          break;
        default: // 其他，替换
          (finalConfig as any)[k] = v; // eslint-disable-line @typescript-eslint/no-explicit-any
          
          break;
      }
    });
  });
  
  return finalConfig as C;
}
