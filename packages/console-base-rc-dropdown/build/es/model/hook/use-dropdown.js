import { useMemo, useCallback } from 'react';
import useVisible from './use-visible';
import useDispatchToggleVisible from './use-dispatch-toggle-visible';
/**
 * 给内容用的 hook
 */

export default function useDropdown() {
  var visible = useVisible();
  var dispatchToggleVisible = useDispatchToggleVisible();
  var showDrop = useCallback(function () {
    return dispatchToggleVisible(true);
  }, [dispatchToggleVisible]);
  var hideDrop = useCallback(function () {
    return dispatchToggleVisible(false);
  }, [dispatchToggleVisible]);
  return useMemo(function () {
    return {
      visible: visible,
      showDrop: showDrop,
      hideDrop: hideDrop
    };
  }, [visible, showDrop, hideDrop]);
}