import {
  useEffect,
  useMemo
} from 'react';

import useModelProps from './_use-model-props';
import useHandleReset from './use-handle-reset';

export default function useEffectObserveResize(): void {
  const {
    container,
    containerInner
  } = useModelProps();
  const handleReset = useHandleReset();
  
  const resizeObserver = useMemo((): ResizeObserver | null => {
    // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
    if (typeof ResizeObserver !== 'function') {
      return null;
    }
    
    return new ResizeObserver(handleReset);
  }, [handleReset]);
  
  useEffect(() => {
    if (!resizeObserver) {
      return;
    }
    
    resizeObserver.observe(container);
    
    return () => resizeObserver.unobserve(container);
  }, [container, resizeObserver]);
  
  useEffect(() => {
    if (!containerInner || !resizeObserver) {
      return;
    }
    
    resizeObserver.observe(containerInner);
    
    return () => resizeObserver.unobserve(containerInner);
  }, [containerInner, resizeObserver]);
}