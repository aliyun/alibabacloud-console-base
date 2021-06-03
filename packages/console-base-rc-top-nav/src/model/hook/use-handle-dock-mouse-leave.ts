import {
  MouseEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetDockHoverActiveTimer from './use-dispatch-set-dock-hover-active-timer';

export default function useHandleDockMouseLeave(): (e: MouseEvent<HTMLElement>) => void {
  const {
    dock
  } = useModelProps();
  const dispatchSetDockHoverActiveTimer = useDispatchSetDockHoverActiveTimer();
  
  const {
    onMouseLeave
  } = dock || {};
  
  return useCallback((e: MouseEvent<HTMLElement>): void => {
    dispatchSetDockHoverActiveTimer(null); // lifecycle 会清理未完成的 timeout
    
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  }, [onMouseLeave, dispatchSetDockHoverActiveTimer]);
}
