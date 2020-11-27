import {
  useCallback
} from 'react';

import {
  actionUnlock
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchUnlock(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch(actionUnlock()), [dispatch]);
}
