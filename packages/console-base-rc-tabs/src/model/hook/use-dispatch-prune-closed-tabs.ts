import {
  useCallback
} from 'react';

import {
  IPropsTab
} from '../../types';
import {
  actionPruneClosedTabs
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchPruneClosedTabs(): (payload: IPropsTab[]) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: IPropsTab[]) => dispatch(actionPruneClosedTabs(payload)), [dispatch]);
}
