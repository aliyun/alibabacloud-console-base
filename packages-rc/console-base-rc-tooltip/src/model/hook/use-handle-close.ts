import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetVisible from './use-dispatch-set-visible';

export default function useHandleClose(): () => void {
  const [{
    onClose
  }] = useModelProps();
  const dispatchSetVisible = useDispatchSetVisible();
  
  return useCallback((): void => {
    dispatchSetVisible(false);
    onClose?.();
  }, [dispatchSetVisible, onClose]);
}