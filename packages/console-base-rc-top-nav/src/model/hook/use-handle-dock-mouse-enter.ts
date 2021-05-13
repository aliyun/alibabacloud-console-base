import {
  MouseEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useModelIsUnmounted from './_use-model-is-unmounted';
import useDispatchSetDockHoverActiveTimer from './use-dispatch-set-dock-hover-active-timer';
import useDockActive from './use-dock-active';
import useHandleDockActiveChange from './use-handle-dock-active-change';

export default function useHandleDockMouseEnter(): (e: MouseEvent<HTMLElement>) => void {
  const {
    dock
  } = useModelProps();
  const isUnmounted = useModelIsUnmounted();
  const dockActive = useDockActive();
  const dispatchSetDockHoverActiveTimer = useDispatchSetDockHoverActiveTimer();
  const handleDockActiveChange = useHandleDockActiveChange();
  
  const {
    onMouseEnter
  } = dock || {};
  
  return useCallback((e: MouseEvent<HTMLElement>): void => {
    if (!dockActive) {
      const timer = window.setTimeout(() => {
        if (isUnmounted()) {
          return;
        }
        
        handleDockActiveChange(true);
        dispatchSetDockHoverActiveTimer(null);
      }, 400);
      
      dispatchSetDockHoverActiveTimer(timer);
    }
    
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  }, [isUnmounted, dockActive, onMouseEnter, dispatchSetDockHoverActiveTimer, handleDockActiveChange]);
}
