import { useEffect } from 'react';
import { useDispatchUpdateWindowHeight } from '../../hook';
/**
 * 监听 window resize
 */

export default function AdjustHeight() {
  var dispatchUpdateWindowHeight = useDispatchUpdateWindowHeight();
  useEffect(function () {
    window.addEventListener('resize', dispatchUpdateWindowHeight);
    return function () {
      return window.removeEventListener('resize', dispatchUpdateWindowHeight);
    };
  }, [dispatchUpdateWindowHeight]);
  return null;
}