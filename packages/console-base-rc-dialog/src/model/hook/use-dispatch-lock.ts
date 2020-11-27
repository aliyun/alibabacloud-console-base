import {
  useCallback
} from 'react';

import {
  actionLock
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchLock(): (loading: boolean) => void {
  const dispatch = useModelDispatch();
  
  return useCallback((loading?: boolean) => dispatch(actionLock(loading)), [dispatch]);
}
