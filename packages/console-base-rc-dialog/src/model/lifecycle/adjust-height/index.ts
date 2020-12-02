import {
  useEffect
} from 'react';

import {
  useDispatchUpdateWindowHeight
} from '../../hook';

/**
 * 监听 window resize
 */
export default function AdjustHeight(): null {
  const dispatchUpdateWindowHeight = useDispatchUpdateWindowHeight();
  
  useEffect(() => {
    window.addEventListener('resize', dispatchUpdateWindowHeight);

    return () => window.removeEventListener('resize', dispatchUpdateWindowHeight);
  }, [dispatchUpdateWindowHeight]);
  
  return null;
}
