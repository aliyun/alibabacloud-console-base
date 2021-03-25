import {
  useCallback
} from 'react';

import useModelIsUnmounted from './_use-model-is-unmounted';
import useModelState from './_use-model-state';
import useDispatchSetVisibleTimer from './use-dispatch-set-visible-timer';
import useDispatchSetVisible from './use-dispatch-set-visible';
import useVisible from './use-visible';
import useProps from './use-props';

export default function useHandleSetVisible(): (payload: boolean) => void {
  const {
    onVisibleChange
  } = useProps();
  const {
    visibleTimer
  } = useModelState();
  const isUnmounted = useModelIsUnmounted();
  const visible = useVisible();
  const dispatchToggleVisibleTimer = useDispatchSetVisibleTimer();
  const dispatchSetVisible = useDispatchSetVisible();
  
  return useCallback((payload: boolean): void => {
    if (visibleTimer) {
      console.info('clear timer', visible, visibleTimer);
      
      window.clearTimeout(visibleTimer);
    }
    
    if (visible === payload) {
      console.info('same', visible)
      
      return;
    }
    
    const timer = window.setTimeout(() => {
      if (isUnmounted()) {
        return;
      }
      
      dispatchSetVisible(payload);
      dispatchToggleVisibleTimer(null);
      
      if (onVisibleChange) {
        onVisibleChange(payload);
      }
      
      console.info('in timer');
    }, 200);
    
    console.info('timer', timer);
    
    dispatchToggleVisibleTimer(timer);
  }, [visible, visibleTimer, isUnmounted, onVisibleChange, dispatchSetVisible, dispatchToggleVisibleTimer]);
}
