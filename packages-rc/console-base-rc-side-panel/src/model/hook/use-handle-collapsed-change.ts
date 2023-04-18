import {
  useCallback
} from 'react';

import useCollapsed from './use-collapsed';
import useDispatchSetCollapsed from './use-dispatch-set-collapsed';
import useModelProps from './_use-model-props';

export default function useHandleCollapsedChange(): () => void {
  const {
    onCollapsedChange
  } = useModelProps();
  const collapsed = !useCollapsed(); // 取反一下
  const dispatchSetCollapsed = useDispatchSetCollapsed();
  
  return useCallback(() => {
    dispatchSetCollapsed(collapsed);
    onCollapsedChange?.(collapsed);
  }, [collapsed, dispatchSetCollapsed, onCollapsedChange]);
}
