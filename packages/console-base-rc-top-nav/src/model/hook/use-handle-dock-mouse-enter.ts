import {
  MouseEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetDockHoverActiveTimer from './use-dispatch-set-dock-hover-active-timer';
import useDispatchSetDockActiveByHoverTimestamp from './use-dispatch-set-dock-active-by-hover-timestamp';
import useDockActive from './use-dock-active';
import useHandleDockActiveChange from './use-handle-dock-active-change';

export default function useHandleDockMouseEnter(): (e: MouseEvent<HTMLElement>) => void {
  const {
    dock
  } = useModelProps();
  const dockActive = useDockActive();
  const dispatchSetDockHoverActiveTimer = useDispatchSetDockHoverActiveTimer();
  const dispatchSetDockActiveByHoverTimestamp = useDispatchSetDockActiveByHoverTimestamp();
  const handleDockActiveChange = useHandleDockActiveChange();
  
  const {
    onMouseEnter
  } = dock || {};
  
  return useCallback((e: MouseEvent<HTMLElement>): void => {
    if (!dockActive) {
      const timer = window.setTimeout(() => {
        handleDockActiveChange(true);
        dispatchSetDockActiveByHoverTimestamp(Date.now()); // 避免自动 active 被 click 瞬间反转
        dispatchSetDockHoverActiveTimer(null);
      }, 400);
      
      dispatchSetDockHoverActiveTimer(timer);
    }
    
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  }, [dockActive, onMouseEnter, dispatchSetDockHoverActiveTimer, dispatchSetDockActiveByHoverTimestamp, handleDockActiveChange]);
}
