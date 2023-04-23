import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetFilterVisible(): (payload: boolean) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: boolean): void => dispatch({
    type: EAction.SET_FILTER_VISIBLE,
    payload
  }), [dispatch]);
}
