import { useCallback } from 'react';
import { actionActivate, actionDeactivate } from '../action';
import useModelDispatch from './_use-model-dispatch';
export default function useDispatchToggleActive() {
  var dispatch = useModelDispatch();
  return useCallback(function (active) {
    return dispatch(active ? actionActivate() : actionDeactivate());
  }, [dispatch]);
}