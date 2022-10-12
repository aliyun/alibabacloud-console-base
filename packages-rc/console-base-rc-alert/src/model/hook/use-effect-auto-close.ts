import {
  useEffect
} from 'react';

import useProps from './use-props';
import useHandleClose from './use-handle-close';
import useVisible from './use-visible';

export default function useEffectAutoClose(): void {
  const [{
    autoClose
  }] = useProps();
  const visible = useVisible();
  const handleClose = useHandleClose();
  
  useEffect(() => {
    if (!visible || autoClose <= 0) {
      return;
    }
    
    const timer = window.setTimeout(handleClose, autoClose * 1000);
    
    return () => window.clearTimeout(timer);
  }, [autoClose, visible, handleClose]);
}