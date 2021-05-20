import {
  useEffect
} from 'react';

import useOnWindowResize from '../../hook/use-on-window-resize';

/**
 * 窗口变化需要调整位置和大小等
 */
export default function WindowResize(): null {
  const onWindowSize = useOnWindowResize();
  
  useEffect(() => {
    window.addEventListener('resize', onWindowSize);
    
    return () => {
      window.removeEventListener('resize', onWindowSize);
    };
  }, [onWindowSize]);
  
  return null;
}
