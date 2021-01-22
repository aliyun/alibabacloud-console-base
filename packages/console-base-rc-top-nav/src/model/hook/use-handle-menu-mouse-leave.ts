import {
  MouseEvent,
  useCallback
} from 'react';

import useOnMenuMouseLeaveWithDebounce from './use-on-menu-mouse-leave-with-debounce';

export default function useHandleMenuMouseLeave(): (e: MouseEvent<HTMLElement>, onMouseLeave?: (e: MouseEvent<HTMLElement>) => void, key?: string) => void {
  const onMenuMouseLeaveWithDebounce = useOnMenuMouseLeaveWithDebounce();
  
  return useCallback((e: MouseEvent<HTMLElement>, onMouseLeave?: (e: MouseEvent<HTMLElement>) => void, key?: string): void => {
    onMenuMouseLeaveWithDebounce(key);
    
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  }, [onMenuMouseLeaveWithDebounce]);
}
