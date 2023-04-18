import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetFilterVisible from './use-dispatch-set-filter-visible';

export default function useHandleFilterVisibleChange(): (visible: boolean) => void {
  const {
    onFilterVisibleChange
  } = useModelProps();
  const dispatchSetFilterVisible = useDispatchSetFilterVisible();
  
  return useCallback((visible: boolean) => {
    dispatchSetFilterVisible(visible);
    onFilterVisibleChange?.(visible);
  }, [onFilterVisibleChange, dispatchSetFilterVisible]);
}
