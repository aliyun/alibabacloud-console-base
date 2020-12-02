import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState, useEffect } from 'react';
import useIsUnmounted from '@alicloud/react-hook-is-unmounted';
import { useDispatchToggleActive, useDispatchFocus } from '../../hook';
/**
 * mimic componentDidMount
 */

export default function DidMount() {
  var isUnmounted = useIsUnmounted();
  var dispatchToggleActive = useDispatchToggleActive();
  var dispatchFocus = useDispatchFocus();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      stateDidMount = _useState2[0],
      setStateDidMount = _useState2[1];

  useEffect(function () {
    if (!stateDidMount) {
      setStateDidMount(true);
      setTimeout(function () {
        // 触发 CSS 动画
        if (isUnmounted()) {
          return;
        }

        dispatchToggleActive(true);
        dispatchFocus();
      }, 10);
    }
  }, [stateDidMount, isUnmounted, dispatchToggleActive, dispatchFocus]);
  return null;
}