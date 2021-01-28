import {
  IFetcherConfigExtended,
  ICacheLocalOptions
} from '../types';

import generateCacheKey from './generate-cache-key';

export default function parseCacheLocalOptions(fetcherConfig: IFetcherConfigExtended): Required<ICacheLocalOptions> | null {
  if (!fetcherConfig.cacheLocal) {
    return null;
  }
  
  const {
    key = '',
    ttl = -1,
    invalidateOld = false
  } = fetcherConfig.cacheLocal === true ? {} : fetcherConfig.cacheLocal;
  
  return {
    key: key || generateCacheKey(fetcherConfig),
    ttl,
    invalidateOld
  };
}
