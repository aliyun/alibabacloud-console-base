import {
  IMergerOptionsParsed,
  IFetcherConfigExtended
} from '../types';

export default function parseOptions({
  _id,
  signal,
  merger = true
}: IFetcherConfigExtended): IMergerOptionsParsed | null {
  if (!merger || signal) { // 有 AbortSignal 则不可用 merge
    return null;
  }
  
  const {
    key = ''
  } = merger === true ? {} : merger;
  
  return {
    key: key || _id!
  };
}
