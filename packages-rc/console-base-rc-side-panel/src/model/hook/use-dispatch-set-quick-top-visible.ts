import {
  useCallback
} from 'react';

import {
  EAction
} from '../enum';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetQuickTopVisible(): (payload: boolean) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: boolean): void => dispatch({
    type: EAction.SET_QUICK_TOP_VISIBLE,
    payload
  }), [dispatch]);
}
