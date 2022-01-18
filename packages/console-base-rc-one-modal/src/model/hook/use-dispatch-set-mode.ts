import {
  useCallback
} from 'react';

import {
  EModalMode,
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetMode(): (payload: EModalMode) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: EModalMode) => dispatch({
    type: EAction.SET_MODE,
    payload
  }), [dispatch]);
}
