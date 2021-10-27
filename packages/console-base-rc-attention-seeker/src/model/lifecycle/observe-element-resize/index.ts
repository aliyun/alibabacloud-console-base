import {
  useMemo,
  useEffect
} from 'react';

import {
  useAttentionElement,
  useHandleRefreshRectStyle
} from '../../hook';

/**
 * 监听元素的变化，以自动修正位置、大小
 */
export default function ObserveElementResize(): null {
  const attentionElement = useAttentionElement();
  const handleRefreshRectStyle = useHandleRefreshRectStyle();
  
  const resizeObserver = useMemo((): ResizeObserver | null => {
    // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
    if (typeof ResizeObserver !== 'function') {
      return null;
    }
    
    return new ResizeObserver(handleRefreshRectStyle);
  }, [handleRefreshRectStyle]);
  
  useEffect(() => {
    if (!attentionElement) {
      return;
    }
    
    if (resizeObserver) {
      resizeObserver.observe(attentionElement);
      
      return () => {
        resizeObserver.unobserve(attentionElement);
        resizeObserver.disconnect();
      };
    }
    
    window.addEventListener('resize', handleRefreshRectStyle);
    
    return () => window.removeEventListener('resize', handleRefreshRectStyle);
  }, [attentionElement, handleRefreshRectStyle, resizeObserver]);
  
  return null;
}