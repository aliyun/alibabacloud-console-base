import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useCollapsed from './use-collapsed';
import useDispatchSetCollapsed from './use-dispatch-set-collapsed';

export default function useHandleCollapsedChange(): () => void {
  const {
    asideNavProps
  } = useModelProps();
  const collapsed = useCollapsed();
  const dispatchSetCollapsed = useDispatchSetCollapsed();
  const onCollapsedChange = asideNavProps?.onCollapsedChange;
  
  return useCallback(() => {
    const nextCollapsed = !collapsed;
    
    dispatchSetCollapsed(nextCollapsed);
    onCollapsedChange?.(nextCollapsed);
  }, [collapsed, dispatchSetCollapsed, onCollapsedChange]);
}
