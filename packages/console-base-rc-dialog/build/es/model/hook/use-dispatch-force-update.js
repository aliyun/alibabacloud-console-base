import { useCallback } from 'react';
import { actionForceUpdate } from '../action';
import useModelDispatch from './_use-model-dispatch';
export default function useDispatchForceUpdate() {
  var dispatch = useModelDispatch();
  return useCallback(function () {
    return dispatch(actionForceUpdate());
  }, [dispatch]);
}