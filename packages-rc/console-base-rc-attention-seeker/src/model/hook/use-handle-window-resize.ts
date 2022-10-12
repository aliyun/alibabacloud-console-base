import {
  useCallback
} from 'react';

import useHandleRefreshAttentionRect from './use-handle-refresh-attention-rect';
import useDispatchRefreshViewport from './use-dispatch-refresh-viewport';

export default function useHandleWindowResize(): () => void {
  const dispatchRefreshViewport = useDispatchRefreshViewport();
  const handleRefreshRectStyle = useHandleRefreshAttentionRect();
  
  return useCallback(() => {
    dispatchRefreshViewport();
    handleRefreshRectStyle();
  }, [dispatchRefreshViewport, handleRefreshRectStyle]);
}