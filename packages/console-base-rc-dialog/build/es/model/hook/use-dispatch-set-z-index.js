import { useCallback } from 'react';
import { actionSetZIndex } from '../action';
import useModelDispatch from './_use-model-dispatch';
export default function useDispatchSetZIndex() {
  var dispatch = useModelDispatch();
  return useCallback(function (zIndex) {
    return dispatch(actionSetZIndex(zIndex));
  }, [dispatch]);
}