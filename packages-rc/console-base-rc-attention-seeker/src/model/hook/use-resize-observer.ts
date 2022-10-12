import {
  useMemo
} from 'react';

import useHandleRefreshAttentionRect from './use-handle-refresh-attention-rect';

export default function useResizeObserver(): ResizeObserver | null {
  const handleRefreshRectStyle = useHandleRefreshAttentionRect();
  
  return useMemo((): ResizeObserver | null => {
    // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
    if (typeof ResizeObserver !== 'function') {
      return null;
    }
    
    return new ResizeObserver(handleRefreshRectStyle);
  }, [handleRefreshRectStyle]);
}