import { useCallback } from 'react';
import { actionToggleVisible } from '../action';
import useModelProps from './_use-model-props';
import useModelDispatch from './_use-model-dispatch';
export default function useDispatchToggleVisible() {
  var _useModelProps = useModelProps(),
      onVisibleChange = _useModelProps.onVisibleChange;

  var dispatch = useModelDispatch();
  return useCallback(function () {
    var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    dispatch(actionToggleVisible(visible));

    if (onVisibleChange) {
      onVisibleChange(visible);
    }
  }, [dispatch, onVisibleChange]);
}