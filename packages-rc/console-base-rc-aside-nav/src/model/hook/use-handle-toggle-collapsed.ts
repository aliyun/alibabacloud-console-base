import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useCollapsed from './use-collapsed';
import useDispatchSetCollapsed from './use-dispatch-set-collapsed';

export default function useHandleToggleCollapsed(): () => void {
  const {
    onCollapsedChange
  } = useModelProps();
  const collapsed = useCollapsed();
  const dispatchSetCollapsed = useDispatchSetCollapsed();
  
  return useCallback(() => {
    dispatchSetCollapsed(!collapsed);
    onCollapsedChange?.(!collapsed);
  }, [collapsed, dispatchSetCollapsed, onCollapsedChange]);
}
