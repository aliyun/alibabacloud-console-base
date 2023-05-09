import {
  useEffect
} from 'react';

import useHandleWindowResize from './use-handle-window-resize';

/**
 * 监测 window resize，这里不适合用 ResizeObserver 监测 document.documentElement 的大小变化，
 * 实测下来，当有滚轴的时候，纵向缩放无法触发 ResizeObserver 的回调
 */
export default function useEffectObserveWindowResize(): void {
  const handleWindowResize = useHandleWindowResize();
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);
}
