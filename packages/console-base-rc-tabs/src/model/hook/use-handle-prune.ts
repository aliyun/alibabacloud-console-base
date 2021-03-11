import {
  useCallback
} from 'react';

import useProps from './use-props';
import useDispatchPruneClosedTabs from './use-dispatch-prune-closed-tabs';

export default function useHandlePrune(): () => void {
  const {
    tabs
  } = useProps();
  const dispatchPruneClosedTabs = useDispatchPruneClosedTabs();
  
  return useCallback(() => dispatchPruneClosedTabs(tabs), [dispatchPruneClosedTabs, tabs]);
}
