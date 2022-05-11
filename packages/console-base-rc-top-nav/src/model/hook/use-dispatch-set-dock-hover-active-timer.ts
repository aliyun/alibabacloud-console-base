import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetDockHoverActiveTimer(): (payload: number | null) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: number | null): void => dispatch({
    type: EAction.SET_DOCK_HOVER_ACTIVE_TIMER,
    payload
  }), [dispatch]);
}
