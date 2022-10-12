import {
  useMemo,
  useEffect
} from 'react';

import useModelState from './_use-model-state';
import useDispatchSetWidth from './use-dispatch-set-width';

/**
 * 在 full 的时候，容易因宽度变化导致 UI 发生错乱，监听大小变化，必要的时候强行改 theme
 */
export default function useEffectResizeObserver(): void {
  const {
    domUi
  } = useModelState();
  const dispatchSetWidth = useDispatchSetWidth();
  
  const resizeObserver = useMemo((): ResizeObserver | null => {
    // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
    if (typeof ResizeObserver !== 'function' || !domUi) {
      return null;
    }
    
    return new ResizeObserver(() => dispatchSetWidth(domUi.getBoundingClientRect().width));
  }, [domUi, dispatchSetWidth]);
  
  useEffect(() => {
    if (!domUi) {
      return;
    }
    
    if (resizeObserver) {
      resizeObserver.observe(domUi);
      
      return () => resizeObserver.unobserve(domUi);
    }
  }, [domUi, resizeObserver]);
}