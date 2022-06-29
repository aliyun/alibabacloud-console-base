import {
  useMemo
} from 'react';

import useHandleRefreshRectStyle from './use-handle-refresh-rect-style';

export default function useResizeObserver(): ResizeObserver | null {
  const handleRefreshRectStyle = useHandleRefreshRectStyle();
  
  return useMemo((): ResizeObserver | null => {
    // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
    if (typeof ResizeObserver !== 'function') {
      return null;
    }
    
    return new ResizeObserver(handleRefreshRectStyle);
  }, [handleRefreshRectStyle]);
}