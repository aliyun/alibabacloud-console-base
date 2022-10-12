import {
  useCallback
} from 'react';

import {
  EMicroBrowserMode,
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetMode(): (payload: EMicroBrowserMode) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: EMicroBrowserMode) => dispatch({
    type: EAction.SET_MODE,
    payload
  }), [dispatch]);
}
