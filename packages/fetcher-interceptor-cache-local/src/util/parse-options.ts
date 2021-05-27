import {
  IFetcherConfigExtended,
  ICacheLocalOptionsParsed
} from '../types';

export default function parseOptions(fetcherConfig: IFetcherConfigExtended): ICacheLocalOptionsParsed | null {
  if (!fetcherConfig.cacheLocal) {
    return null;
  }
  
  const {
    key = '',
    ttl = -1,
    overwrite = false
  } = fetcherConfig.cacheLocal === true ? {} : fetcherConfig.cacheLocal;
  
  return {
    key: key || fetcherConfig._id!,
    ttl,
    overwrite
  };
}
