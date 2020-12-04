import {
  useCallback
} from 'react';

import {
  actionPruneClosedTabs
} from '../action';

import useModelProps from './_use-model-props';
import useModelDispatch from './_use-model-dispatch';

export default function useDispatchPruneClosedTabs(): () => void {
  const {
    tabs
  } = useModelProps();
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch(actionPruneClosedTabs(tabs)), [dispatch, tabs]);
}
