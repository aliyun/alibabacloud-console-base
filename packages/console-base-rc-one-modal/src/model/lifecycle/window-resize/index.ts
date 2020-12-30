import {
  useEffect
} from 'react';

import {
  useDispatchRefreshWindowSize
} from '../../hook';

/**
 * 窗口变化需要调整位置和大小等
 */
export default function WindowResize(): null {
  const dispatchRefreshWindowSize = useDispatchRefreshWindowSize();
  
  useEffect(() => {
    window.addEventListener('resize', dispatchRefreshWindowSize);
    
    return () => {
      window.removeEventListener('resize', dispatchRefreshWindowSize);
    };
  }, [dispatchRefreshWindowSize]);
  
  return null;
}
