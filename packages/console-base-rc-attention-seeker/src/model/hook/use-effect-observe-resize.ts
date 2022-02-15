import {
  useMemo,
  useEffect
} from 'react';

import useDomBackdrop from './use-dom-backdrop';
import useAttentionElement from './use-attention-element';
import useHandleRefreshRectStyle from './use-handle-refresh-rect-style';

/**
 * 监听元素的变化，同时监听 backdrop 的变化，以自动修正位置、大小
 */
export default function useEffectObserveResize(): void {
  const domBackdrop = useDomBackdrop();
  const attentionElement = useAttentionElement();
  const handleRefreshRectStyle = useHandleRefreshRectStyle();
  
  const resizeObserver = useMemo((): ResizeObserver | null => {
    // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
    if (typeof ResizeObserver !== 'function') {
      return null;
    }
    
    return new ResizeObserver(handleRefreshRectStyle);
  }, [handleRefreshRectStyle]);
  
  /**
   * 监听元素本身大小的变化，但 padding 的变化不会收到事件..
   */
  useEffect(() => {
    if (!attentionElement) {
      return;
    }
    
    if (resizeObserver) {
      resizeObserver.observe(attentionElement);
      
      return () => resizeObserver.unobserve(attentionElement);
    }
  }, [attentionElement, resizeObserver]);
  
  /**
   * 为什么只监听 backdrop 而不是 body 的大小变化？
   * 因为有的场景下 body 本身没变化，但 backdrop 会被压缩，而实际导致位置产生变化。
   */
  useEffect(() => {
    if (!domBackdrop) {
      return;
    }
    
    if (resizeObserver) {
      resizeObserver.observe(domBackdrop);
      
      return () => resizeObserver.unobserve(domBackdrop);
    }
  }, [domBackdrop, resizeObserver]);
  
  useEffect(() => {
    if (!attentionElement || !domBackdrop || resizeObserver) {
      return;
    }
    
    window.addEventListener('resize', handleRefreshRectStyle);
    
    return () => window.removeEventListener('resize', handleRefreshRectStyle);
  }, [attentionElement, domBackdrop, handleRefreshRectStyle, resizeObserver]);
}