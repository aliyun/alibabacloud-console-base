import {
  useCallback
} from 'react';

import useDispatchSetFilterFocused from './use-dispatch-set-filter-focused';

export default function useHandleFilterFocusedChange(): (focused: boolean) => void {
  const dispatchSetFilterFocused = useDispatchSetFilterFocused();
  
  return useCallback((focused: boolean) => {
    dispatchSetFilterFocused(focused);
  }, [dispatchSetFilterFocused]);
}
