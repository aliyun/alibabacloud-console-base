import {
  useEffect
} from 'react';

import useDomBackdrop from './use-dom-backdrop';
import useAttentionElement from './use-attention-element';
import useHandleWindowResize from './use-handle-window-resize';

export default function useEffectObserveResizeOfWindow(): void {
  const domBackdrop = useDomBackdrop();
  const attentionElement = useAttentionElement();
  const noWatch = !attentionElement || !domBackdrop;
  const handleWindowResize = useHandleWindowResize();
  
  useEffect(() => {
    if (noWatch) {
      return;
    }
    
    window.addEventListener('resize', handleWindowResize);
    
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [noWatch, handleWindowResize]);
}