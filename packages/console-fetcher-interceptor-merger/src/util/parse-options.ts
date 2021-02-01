import {
  IMergerOptionsParsed,
  IFetcherConfigExtended
} from '../types';

export default function parseOptions(fetcherConfig: IFetcherConfigExtended): IMergerOptionsParsed | null {
  if (!fetcherConfig.merger) {
    return null;
  }
  
  const {
    key = ''
  } = fetcherConfig.merger === true ? {} : fetcherConfig.merger;
  
  return {
    key: key || fetcherConfig._id
  };
}
