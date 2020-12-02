import { useCallback } from 'react';
import useDispatchToggleActive from './use-dispatch-toggle-active';
import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
/**
 * 关闭 Dialog，传入的参数 value 和 rejected 在 Dialog 场景下很有用
 *
 * 注意会经常变，因为涉及到 active 和 locked
 */

export default function useDispatchCloseWithValue() {
  var _useModelProps = useModelProps(),
      undefinedAsReject = _useModelProps.undefinedAsReject,
      onClose = _useModelProps.onClose;

  var _useModelState = useModelState(),
      locked = _useModelState.locked,
      active = _useModelState.active;

  var dispatchToggleActive = useDispatchToggleActive();
  return useCallback(function (value, rejected) {
    // eslint-disable-line @typescript-eslint/no-explicit-any
    if (locked || !active) {
      return;
    }

    dispatchToggleActive(false); // 触发 CSS 动画

    setTimeout(function () {
      // wait for animation end FIXME hard coded timeout of 250ms
      if (typeof onClose === 'function') {
        // 真正的从 DOM 上移除还是必须要靠使用的人在 onClose 上进行处理，但不要慌，在 promised 下边已经封装好了
        onClose(value, value === undefined && undefinedAsReject ? true : rejected);
      }
    }, 250);
  }, [locked, active, undefinedAsReject, dispatchToggleActive, onClose]);
}