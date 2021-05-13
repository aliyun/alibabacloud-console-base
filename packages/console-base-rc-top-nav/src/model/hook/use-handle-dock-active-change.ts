import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetDockActive from './use-dispatch-set-dock-active';

export default function useHandleDockActiveChange(): (yes: boolean) => void {
  const {
    dock
  } = useModelProps();
  const dispatchSetDockActive = useDispatchSetDockActive();
  const {
    onActiveChange
  } = dock || {};
  
  return useCallback((yes: boolean) => {
    if (!onActiveChange) {
      return;
    }
    
    dispatchSetDockActive(yes);
    onActiveChange(yes);
  }, [dispatchSetDockActive, onActiveChange]);
}
