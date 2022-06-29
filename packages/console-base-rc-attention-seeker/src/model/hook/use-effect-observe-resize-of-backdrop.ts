import {
  useEffect
} from 'react';

import useDomBackdrop from './use-dom-backdrop';
import useResizeObserver from './use-resize-observer';

/**
 * 为什么只监听 backdrop 而不是 body 的大小变化？
 * 因为有的场景下 body 本身没变化，但 backdrop 会被压缩，而实际导致位置产生变化。
 */
export default function useEffectObserveResizeOfBackdrop(): void {
  const domBackdrop = useDomBackdrop();
  const resizeObserver = useResizeObserver();
  
  useEffect(() => {
    if (!domBackdrop) {
      return;
    }
    
    if (resizeObserver) {
      resizeObserver.observe(domBackdrop);
      
      return () => resizeObserver.unobserve(domBackdrop);
    }
  }, [domBackdrop, resizeObserver]);
}