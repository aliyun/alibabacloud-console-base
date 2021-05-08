import {
  useCallback
} from 'react';

import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchActivateTab(): (payload: string | number) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: string | number): void => dispatch({
    type: EAction.ACTIVATE_TAB,
    payload
  }), [dispatch]);
}
