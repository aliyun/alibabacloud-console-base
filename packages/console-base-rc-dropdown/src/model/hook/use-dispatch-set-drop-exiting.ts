import {
  useCallback
} from 'react';

import {
  actionSetDropExiting
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchSetDropExiting(): (payload: boolean) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((payload: boolean): void => dispatch(actionSetDropExiting(payload)), [dispatch]);
}
