import { useCallback } from 'react';
import { actionDidMount } from '../action';
import useModelDispatch from './_use-model-dispatch';
export default function useDispatchMounted() {
  var dispatch = useModelDispatch();
  return useCallback(function () {
    return dispatch(actionDidMount());
  }, [dispatch]);
}