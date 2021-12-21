import {
  useCallback
} from 'react';

import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetZIndex(): (payload: number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: number) => dispatch({
    type: EAction.SET_Z_INDEX,
    payload
  }), [dispatch]);
}
