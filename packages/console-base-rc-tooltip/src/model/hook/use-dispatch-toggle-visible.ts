import {
  useCallback
} from 'react';

import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchToggleVisible(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback((): void => dispatch({
    type: EAction.TOGGLE_VISIBLE
  }), [dispatch]);
}
