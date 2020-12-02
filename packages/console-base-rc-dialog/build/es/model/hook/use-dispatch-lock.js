import { useCallback } from 'react';
import { actionLock } from '../action';
import useModelDispatch from './_use-model-dispatch';
export default function useDispatchLock() {
  var dispatch = useModelDispatch();
  return useCallback(function (loading) {
    return dispatch(actionLock(loading));
  }, [dispatch]);
}