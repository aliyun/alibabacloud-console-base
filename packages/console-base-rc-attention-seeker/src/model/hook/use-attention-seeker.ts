import {
  IAttentionSeekerItem
} from '../../types';

import useModelState from './_use-model-state';
import useProps from './use-props';

export default function useAttentionSeeker(): IAttentionSeekerItem | null {
  const {
    items
  } = useProps();
  const {
    index
  } = useModelState();
  
  return items[index] || items[0] || null;
}
