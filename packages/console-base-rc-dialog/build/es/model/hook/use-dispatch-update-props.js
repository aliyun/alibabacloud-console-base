import { useCallback } from 'react';
import { actionUpdateProps } from '../action';
import useModelDispatch from './_use-model-dispatch';
export default function useDispatchUpdateProps() {
  var dispatch = useModelDispatch();
  return useCallback(function (payload) {
    return dispatch(actionUpdateProps(payload));
  }, [dispatch]);
}