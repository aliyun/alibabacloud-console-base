import {
  IAutoMultiOptionsParsed,
  IFetcherConfigExtended
} from '../types';

export default function parseOptions({
  _id,
  merger = true
}: IFetcherConfigExtended): IAutoMultiOptionsParsed | null {
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
