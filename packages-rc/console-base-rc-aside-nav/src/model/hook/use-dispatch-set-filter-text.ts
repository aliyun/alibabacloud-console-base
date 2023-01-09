import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetFilterText(): (payload: string) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: string): void => dispatch({
    type: EAction.SET_FILTER_TEXT,
    payload
  }), [dispatch]);
}