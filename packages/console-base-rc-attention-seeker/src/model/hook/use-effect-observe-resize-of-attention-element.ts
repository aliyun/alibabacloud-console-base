import {
  useEffect
} from 'react';

import useAttentionElement from './use-attention-element';
import useResizeObserver from './use-resize-observer';

/**
 * 监听元素本身大小的变化，但 padding 的变化不会收到事件..
 */
export default function useEffectObserveResizeOfAttentionElement(): void {
  const attentionElement = useAttentionElement();
  const resizeObserver = useResizeObserver();
  
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
}