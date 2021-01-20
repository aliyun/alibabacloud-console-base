import {
  MouseEvent,
  useCallback
} from 'react';

import useOnMenuMouseEnterWithDebounce from './use-on-menu-mouse-enter-with-debounce';

export default function useHandleMenuMouseEnter(): (e: MouseEvent<HTMLElement>, onMouseEnter?: (e: MouseEvent<HTMLElement>) => void, key?: string) => void {
  const onMenuMouseEnterWithDebounce = useOnMenuMouseEnterWithDebounce();
  
  return useCallback((e: MouseEvent<HTMLElement>, onMouseEnter?: (e: MouseEvent<HTMLElement>) => void, key?: string): void => {
    onMenuMouseEnterWithDebounce(key);
    
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  }, [onMenuMouseEnterWithDebounce]);
}
