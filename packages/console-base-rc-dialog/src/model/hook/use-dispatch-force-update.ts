import {
  useCallback
} from 'react';

import {
  actionForceUpdate
} from '../action';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchForceUpdate(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch(actionForceUpdate()), [dispatch]);
}
