import {
  useCallback
} from 'react';

import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetActive(): (payload: boolean) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: boolean) => dispatch({
    type: EAction.SET_ACTIVE,
    payload
  }), [dispatch]);
}
