import {
  useCallback
} from 'react';

import useDispatchToggleVisibleWithDebounce from './use-dispatch-toggle-visible-with-debounce';

export default function useOnDropdownMouseLeave(): () => void {
  const dispatchToggleVisibleWithDebounce = useDispatchToggleVisibleWithDebounce();
  
  return useCallback((): void => dispatchToggleVisibleWithDebounce(false), [dispatchToggleVisibleWithDebounce]);
}
