import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetFilterValue from './use-dispatch-set-filter-value';

export default function useHandleFilterValueChange(): (value: string) => void {
  const {
    onFilterValueChange
  } = useModelProps();
  const dispatchSetFilterValue = useDispatchSetFilterValue();
  
  return useCallback((value: string) => {
    dispatchSetFilterValue(value);
    onFilterValueChange?.(value);
  }, [onFilterValueChange, dispatchSetFilterValue]);
}
