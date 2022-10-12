import {
  useCallback
} from 'react';

import useProps from './use-props';
import useDispatchSetVisible from './use-dispatch-set-visible';

export default function useHandleClose(): () => void {
  const [{
    onVisibleChange
  }] = useProps();
  const dispatchSetVisible = useDispatchSetVisible();
  
  return useCallback(() => {
    dispatchSetVisible(false);
    
    onVisibleChange?.(false);
  }, [dispatchSetVisible, onVisibleChange]);
}
