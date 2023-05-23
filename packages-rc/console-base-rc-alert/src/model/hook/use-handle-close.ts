import {
  useCallback
} from 'react';

import useDispatchSetVisible from './use-dispatch-set-visible';
import useModelProps from './_use-model-props';

export default function useHandleClose(): () => void {
  const {
    onVisibleChange
  } = useModelProps();
  const dispatchSetVisible = useDispatchSetVisible();
  
  return useCallback(() => {
    dispatchSetVisible(false);
    
    onVisibleChange?.(false);
  }, [dispatchSetVisible, onVisibleChange]);
}
