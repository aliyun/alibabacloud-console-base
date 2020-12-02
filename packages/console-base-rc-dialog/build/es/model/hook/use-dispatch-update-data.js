import { useCallback } from 'react';
import { actionUpdateData } from '../action';
import useModelDispatch from './_use-model-dispatch';
export default function useDispatchUpdateData() {
  var dispatch = useModelDispatch();
  return useCallback(function (data) {
    return dispatch(actionUpdateData(data));
  }, [dispatch]);
}