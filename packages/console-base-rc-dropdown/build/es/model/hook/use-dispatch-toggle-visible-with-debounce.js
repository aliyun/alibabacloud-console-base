import _debounce from 'lodash/debounce';
import { useMemo } from 'react';
import useDispatchToggleVisible from './use-dispatch-toggle-visible';
/**
 * 适用于快速切换的场景（鼠标移入移出）
 */

export default function useDispatchToggleVisibleWithDebounce() {
  var dispatchToggleVisible = useDispatchToggleVisible();
  return useMemo(function () {
    return _debounce(function (visible) {
      return dispatchToggleVisible(visible);
    }, 200);
  }, [dispatchToggleVisible]);
}