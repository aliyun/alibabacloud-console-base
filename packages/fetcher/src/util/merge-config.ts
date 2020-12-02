import _forEach from 'lodash/forEach';

import {
  IFetcherConfig
} from '../types';
import normalizeHeaders from '../util/normalize-headers';
import mergeParams from '../util/merge-params';

/**
 * 将多个 config 进行合并
 */
export default function mergeConfig<C extends IFetcherConfig = IFetcherConfig>(config: C, ...args: Partial<C>[]): C {
  const finalConfig: C = {
    ...config
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
          finalConfig[k] = v;
          
          break;
      }
    });
  });
  
  return finalConfig as C;
}
