import {
  IAttentionSeekerItem
} from '../types';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useAttentionSeeker(): IAttentionSeekerItem | null {
  const {
    items
  } = useModelProps();
  const {
    index
  } = useModelState();
  
  return items[index] || items[0] || null;
}
