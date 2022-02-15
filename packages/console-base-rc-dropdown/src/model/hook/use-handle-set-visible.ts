import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useDispatchSetVisibleTimer from './use-dispatch-set-visible-timer';
import useDispatchSetVisible from './use-dispatch-set-visible';
import useDropVisible from './use-drop-visible';

export default function useHandleSetVisible(): (payload: boolean) => void {
  const {
    disabled,
    onVisibleChange
  } = useModelProps();
  const {
    visibleTimer
  } = useModelState();
  const visible = useDropVisible();
  const dispatchToggleVisibleTimer = useDispatchSetVisibleTimer();
  const dispatchSetVisible = useDispatchSetVisible();
  
  return useCallback((payload: boolean): void => {
    if (visibleTimer) {
      window.clearTimeout(visibleTimer);
    }
    
    if (disabled || visible === payload) {
      return;
    }
    
    const timer = window.setTimeout(() => {
      dispatchSetVisible(payload);
      dispatchToggleVisibleTimer(null);
      
      if (onVisibleChange) {
        onVisibleChange(payload);
      }
    }, 200);
    
    dispatchToggleVisibleTimer(timer);
  }, [disabled, visible, visibleTimer, onVisibleChange, dispatchSetVisible, dispatchToggleVisibleTimer]);
}
