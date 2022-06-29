import {
  useEffect
} from 'react';

import useDomBackdrop from './use-dom-backdrop';
import useAttentionElement from './use-attention-element';
import useResizeObserver from './use-resize-observer';
import useHandleRefreshRectStyle from './use-handle-refresh-rect-style';

export default function useEffectObserveResizeOfWindow(): void {
  const domBackdrop = useDomBackdrop();
  const attentionElement = useAttentionElement();
  const handleRefreshRectStyle = useHandleRefreshRectStyle();
  
  const resizeObserver = useResizeObserver();
  
  useEffect(() => {
    if (!attentionElement || !domBackdrop || resizeObserver) {
      return;
    }
    
    window.addEventListener('resize', handleRefreshRectStyle);
    
    return () => window.removeEventListener('resize', handleRefreshRectStyle);
  }, [attentionElement, domBackdrop, handleRefreshRectStyle, resizeObserver]);
}