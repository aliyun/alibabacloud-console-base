import {
  useEffect
} from 'react';

import useModelProps from './_use-model-props';
import useHandleResetFilter from './use-handle-reset-filter';

/**
 * props.items 或 props.upperHref 发生变化，自动重置 Filter
 */
export default function useEffectResetFilterWhenItemsChange(): void {
  const {
    upperHref,
    items
  } = useModelProps();
  const handleResetFilter = useHandleResetFilter();
  
  useEffect(() => {
    handleResetFilter();
  }, [upperHref, items, handleResetFilter]);
}
