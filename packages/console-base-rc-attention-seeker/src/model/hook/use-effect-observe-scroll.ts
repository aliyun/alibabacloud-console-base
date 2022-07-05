import {
  useEffect
} from 'react';

import useDomBackdrop from './use-dom-backdrop';
import useAttentionElement from './use-attention-element';
import useHandleRefreshAttentionRect from './use-handle-refresh-attention-rect';

/**
 * 当滚动发生时，需要刷新 attention seeker 的位置
 */
export default function useEffectObserveScroll(): void {
  const domBackdrop = useDomBackdrop();
  const attentionElement = useAttentionElement();
  const noWatch = !attentionElement || !domBackdrop;
  const handleRefreshRectStyle = useHandleRefreshAttentionRect();
  
  useEffect(() => {
    if (noWatch) {
      return;
    }
  
    window.addEventListener('scroll', handleRefreshRectStyle);
    
    return () => window.removeEventListener('scroll', handleRefreshRectStyle);
  }, [noWatch, handleRefreshRectStyle]);
}