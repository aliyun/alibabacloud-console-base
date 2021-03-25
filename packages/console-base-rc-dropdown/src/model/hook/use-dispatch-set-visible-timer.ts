import {
  useCallback
} from 'react';

import {
  actionSetVisibleTimer
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetVisibleTimer(): (payload: number | null) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: number | null): void => dispatch(actionSetVisibleTimer(payload)), [dispatch]);
}
