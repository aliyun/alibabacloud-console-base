import {
  useCallback
} from 'react';

import useCollapsed from './use-collapsed';
import useDispatchSetCollapsed from './use-dispatch-set-collapsed';
import useModelProps from './_use-model-props';

export default function useHandleToggleCollapsed(): () => void {
  const {
    onToggleCollapsed
  } = useModelProps();
  const collapsed = useCollapsed();
  const dispatchSetCollapsed = useDispatchSetCollapsed();
  
  return useCallback(() => {
    dispatchSetCollapsed(!collapsed);
    onToggleCollapsed?.(!collapsed);
  }, [collapsed, dispatchSetCollapsed, onToggleCollapsed]);
}