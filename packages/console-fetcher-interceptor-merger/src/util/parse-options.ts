import {
  IMergerOptionsParsed,
  IFetcherConfigExtended
} from '../types';

export default function parseOptions({
  _id,
  merger = true
}: IFetcherConfigExtended): IMergerOptionsParsed | null {
  if (!merger) {
    return null;
  }
  
  const {
    key = ''
  } = merger === true ? {} : merger;
  
  return {
    key: key || _id
  };
}
