import {
  IFetcherConfigExtended,
  ICacheLocalOptionsParsed
} from '../types';

import cacheGenerateKey from './cache/gnerate-key';

export default function parseCacheLocalOptions(fetcherConfig: IFetcherConfigExtended): ICacheLocalOptionsParsed | null {
  if (!fetcherConfig.cacheLocal) {
    return null;
  }
  
  const {
    key = '',
    ttl = -1,
    overwrite = false
  } = fetcherConfig.cacheLocal === true ? {} : fetcherConfig.cacheLocal;
  
  return {
    key: key || cacheGenerateKey(fetcherConfig),
    ttl,
    overwrite
  };
}
