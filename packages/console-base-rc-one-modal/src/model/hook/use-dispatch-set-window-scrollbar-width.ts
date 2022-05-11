import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetWindowScrollbarWidth(): (payload: number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: number) => dispatch({
    type: EAction.SET_WINDOW_SCROLLBAR_WIDTH,
    payload
  }), [dispatch]);
}
