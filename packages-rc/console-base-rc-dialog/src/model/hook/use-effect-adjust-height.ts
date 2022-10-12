import {
  useEffect
} from 'react';

import useDispatchUpdateWindowHeight from './use-dispatch-update-window-height';

/**
 * 监听 window resize
 */
export default function useEffectAdjustHeight(): void {
  const dispatchUpdateWindowHeight = useDispatchUpdateWindowHeight();
  
  useEffect(() => {
    window.addEventListener('resize', dispatchUpdateWindowHeight);
    
    return () => window.removeEventListener('resize', dispatchUpdateWindowHeight);
  }, [dispatchUpdateWindowHeight]);
}
