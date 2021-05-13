import {
  MouseEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useDispatchSetDockHoverActiveTimer from './use-dispatch-set-dock-hover-active-timer';

export default function useHandleDockMouseLeave(): (e: MouseEvent<HTMLElement>) => void {
  const {
    dock
  } = useModelProps();
  const {
    dockHoverActiveTimer
  } = useModelState();
  const dispatchSetDockHoverActiveTimer = useDispatchSetDockHoverActiveTimer();
  
  const {
    onMouseLeave
  } = dock || {};
  
  return useCallback((e: MouseEvent<HTMLElement>): void => {
    if (dockHoverActiveTimer) {
      window.clearTimeout(dockHoverActiveTimer);
      dispatchSetDockHoverActiveTimer(null);
    }
    
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  }, [dockHoverActiveTimer, onMouseLeave, dispatchSetDockHoverActiveTimer]);
}
