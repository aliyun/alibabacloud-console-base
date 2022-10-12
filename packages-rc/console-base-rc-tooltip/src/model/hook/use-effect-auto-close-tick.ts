import {
  useEffect
} from 'react';

import useModelState from './_use-model-state';
import useDispatchSetAutoCloseTick from './use-dispatch-set-auto-close-tick';
import useHandleClose from './use-handle-close';
import useVisible from './use-visible';

export default function useEffectAutoCloseTick(): void {
  const {
    autoCloseTick
  } = useModelState();
  const visible = useVisible();
  const dispatchSetAutoCloseTick = useDispatchSetAutoCloseTick();
  const handleClose = useHandleClose();
  
  useEffect(() => {
    if (!visible || autoCloseTick <= 0) {
      return;
    }
    
    const timer = window.setTimeout(() => {
      const nextTick = autoCloseTick - 1;
      
      dispatchSetAutoCloseTick(nextTick);
      
      if (nextTick === 0) {
        handleClose();
      }
    }, 1000);
    
    return () => window.clearTimeout(timer);
  }, [visible, autoCloseTick, dispatchSetAutoCloseTick, handleClose]);
}