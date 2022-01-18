import {
  useMemo,
  useEffect
} from 'react';

import useHandleWindowResize from './use-handle-window-resize';

/**
 * document 的滚轴可能时有时无，需要监测
 * 窗口变化需要调整位置和大小等
 */
export default function useEffectObserveDocumentResize(): void {
  const handleWindowResize = useHandleWindowResize();
  const resizeObserver = useMemo(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
    if (typeof ResizeObserver !== 'function') {
      return null;
    }
    
    return new ResizeObserver(handleWindowResize);
  }, [handleWindowResize]);
  
  useEffect(() => {
    if (!resizeObserver) {
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
    
    resizeObserver.observe(document.documentElement);
    
    return () => {
      resizeObserver.unobserve(document.documentElement);
      resizeObserver.disconnect();
    };
  }, [resizeObserver, handleWindowResize]);
}