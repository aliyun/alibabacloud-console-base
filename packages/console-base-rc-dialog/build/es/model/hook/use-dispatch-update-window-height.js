import { useCallback } from 'react';
import { actionUpdateWindowHeight } from '../action';
import useModelDispatch from './_use-model-dispatch';
export default function useDispatchUpdateWindowHeight() {
  var dispatch = useModelDispatch();
  return useCallback(function () {
    return dispatch(actionUpdateWindowHeight());
  }, [dispatch]);
}