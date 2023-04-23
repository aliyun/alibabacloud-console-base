import {
  useCallback
} from 'react';

import useDispatchSetFilterValue from './use-dispatch-set-filter-value';
import useDispatchSetFilterVisible from './use-dispatch-set-filter-visible';

export default function useHandleResetFilter(): () => void {
  const dispatchSetFilterValue = useDispatchSetFilterValue();
  const dispatchSetFilterVisible = useDispatchSetFilterVisible();
  
  return useCallback(() => {
    dispatchSetFilterValue('');
    dispatchSetFilterVisible(false);
  }, [dispatchSetFilterValue, dispatchSetFilterVisible]);
}
