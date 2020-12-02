import { useMemo } from 'react';
import useModelState from './_use-model-state';
import useDispatchLock from './use-dispatch-lock';
import useDispatchUnlock from './use-dispatch-unlock';
import useDispatchFocus from './use-dispatch-focus';
import useDispatchResetScrollTop from './use-dispatch-reset-scroll-top';
import useDispatchCloseWithValue from './use-dispatch-close-with-value';
import useDispatchUpdateProps from './use-dispatch-update-props';
import useDispatchForceUpdate from './use-dispatch-force-update';
import useDispatchUpdateData from './use-dispatch-update-data';
/**
 * 给 content 使用的 hook
 */

export default function useDialog() {
  var _useModelState = useModelState(),
      data = _useModelState.data;

  var focus = useDispatchFocus();
  var lock = useDispatchLock();
  var unlock = useDispatchUnlock();
  var resetScrollTop = useDispatchResetScrollTop();
  var close = useDispatchCloseWithValue();
  var updateData = useDispatchUpdateData();
  var update = useDispatchUpdateProps();
  var forceUpdate = useDispatchForceUpdate();
  return useMemo(function () {
    return {
      data: data,
      focus: focus,
      resetScrollTop: resetScrollTop,
      lock: lock,
      unlock: unlock,
      update: update,
      updateData: updateData,
      forceUpdate: forceUpdate,
      close: close
    };
  }, [data, focus, resetScrollTop, lock, unlock, update, updateData, forceUpdate, close]);
}