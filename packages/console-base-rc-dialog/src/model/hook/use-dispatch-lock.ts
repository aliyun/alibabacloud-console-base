import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchLock(): (payload?: boolean) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload?: boolean) => dispatch({
    type: EAction.LOCK,
    payload
  }), [dispatch]);
}
