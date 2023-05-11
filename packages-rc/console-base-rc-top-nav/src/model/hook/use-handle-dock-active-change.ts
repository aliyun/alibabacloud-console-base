import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetDockActive from './use-dispatch-set-dock-active';

export default function useHandleDockActiveChange(): (active: boolean) => void {
  const {
    dock
  } = useModelProps();
  const dispatchSetDockActive = useDispatchSetDockActive();
  const {
    onActiveChange
  } = dock || {};
  
  return useCallback((active: boolean) => {
    dispatchSetDockActive(active);
    onActiveChange?.(active);
  }, [dispatchSetDockActive, onActiveChange]);
}
