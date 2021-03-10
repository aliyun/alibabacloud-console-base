import {
  useCallback
} from 'react';

import {
  actionPruneClosedTabs
} from '../action';

import useModelDispatch from './_use-model-dispatch';
import useProps from './use-props';

export default function useDispatchPruneClosedTabs(): () => void {
  const {
    tabs
  } = useProps();
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch(actionPruneClosedTabs(tabs)), [dispatch, tabs]);
}
