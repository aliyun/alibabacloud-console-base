import { useCallback } from 'react';
import { actionUnlock } from '../action';
import useModelDispatch from './_use-model-dispatch';
export default function useDispatchUnlock() {
  var dispatch = useModelDispatch();
  return useCallback(function () {
    return dispatch(actionUnlock());
  }, [dispatch]);
}