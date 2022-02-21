import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useHandleClose from './use-handle-close';

export default function useHandleConfig(): () => void {
  const [{
    onConfig
  }] = useModelProps();
  const handleClose = useHandleClose();
  
  return useCallback((): void => {
    if (onConfig) {
      onConfig();
    }
    
    handleClose();
  }, [onConfig, handleClose]);
}
