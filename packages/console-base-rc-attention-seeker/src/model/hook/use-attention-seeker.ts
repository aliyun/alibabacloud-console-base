import {
  IAttentionSeeker
} from '../types';

import useModelProps from './_use-model-props';

export default function useAttentionSeeker(): IAttentionSeeker | null {
  const {
    items
  } = useModelProps();
  
  return items[0] || null;
}
