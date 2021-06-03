import {
  MouseEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useDockActive from './use-dock-active';
import useDispatchSetDockActiveByHoverTimestamp from './use-dispatch-set-dock-active-by-hover-timestamp';
import useHandleDockActiveChange from './use-handle-dock-active-change';

export default function useHandleDockClick(): (e: MouseEvent<HTMLElement>) => void {
  const {
    dock
  } = useModelProps();
  const {
    dockActiveByHoverTimestamp
  } = useModelState();
  const dispatchSetDockActiveByHoverTimestamp = useDispatchSetDockActiveByHoverTimestamp();
  const dockActive = useDockActive();
  const handleDockActiveChange = useHandleDockActiveChange();
  
  const {
    onClick
  } = dock || {};
  
  return useCallback((e: MouseEvent<HTMLElement>): void => {
    if (dockActive) {
      if (!dockActiveByHoverTimestamp || Date.now() - dockActiveByHoverTimestamp > 300) { // 300 是动画的时间，避免误操
        dispatchSetDockActiveByHoverTimestamp(0);
        handleDockActiveChange(false);
      }
    } else {
      handleDockActiveChange(true);
    }
    
    if (onClick) {
      onClick(e);
    }
  }, [onClick, dockActive, dockActiveByHoverTimestamp, dispatchSetDockActiveByHoverTimestamp, handleDockActiveChange]);
}
