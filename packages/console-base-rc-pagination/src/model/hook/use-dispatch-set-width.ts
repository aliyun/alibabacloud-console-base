import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetWidth(): (payload: number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: number): void => dispatch({
    type: EAction.SET_WIDTH,
    payload
  }), [dispatch]);
}
