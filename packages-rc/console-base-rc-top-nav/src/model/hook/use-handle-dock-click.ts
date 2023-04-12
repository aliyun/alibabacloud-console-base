import {
  MouseEvent,
  useCallback
} from 'react';

import useModelState from './_use-model-state';
import useDockActive from './use-dock-active';
import useDispatchSetDockActiveByHoverTimestamp from './use-dispatch-set-dock-active-by-hover-timestamp';
import useHandleDockActiveChange from './use-handle-dock-active-change';

export default function useHandleDockClick(): (e: MouseEvent<HTMLElement>) => void {
  const {
    dockActiveByHoverTimestamp
  } = useModelState();
  const dispatchSetDockActiveByHoverTimestamp = useDispatchSetDockActiveByHoverTimestamp();
  const dockActive = useDockActive();
  const handleDockActiveChange = useHandleDockActiveChange();
  
  return useCallback((): void => {
    if (dockActive) {
      if (!dockActiveByHoverTimestamp || Date.now() - dockActiveByHoverTimestamp > 250) { // 比 300 的动画时间稍小一些
        dispatchSetDockActiveByHoverTimestamp(0);
        handleDockActiveChange(false);
      }
    } else {
      handleDockActiveChange(true);
    }
  }, [dockActive, dockActiveByHoverTimestamp, dispatchSetDockActiveByHoverTimestamp, handleDockActiveChange]);
}
