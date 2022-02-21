import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetVisible from './use-dispatch-set-visible';

export default function useHandleSetVisible(): (visible: boolean) => void {
  const [{
    onVisibleChange
  }] = useModelProps();
  const dispatchSetVisible = useDispatchSetVisible();
  
  return useCallback((visible: boolean): void => {
    dispatchSetVisible(visible);
    
    if (onVisibleChange) {
      onVisibleChange(visible);
    }
  }, [onVisibleChange, dispatchSetVisible]);
}
