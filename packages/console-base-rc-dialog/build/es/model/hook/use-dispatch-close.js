import { useCallback } from 'react';
import useDispatchCloseWithValue from './use-dispatch-close-with-value';
/**
 * 无参的关闭，用于内部调用
 */

export default function useDispatchClose() {
  var dispatchCloseWithValue = useDispatchCloseWithValue();
  return useCallback(function () {
    return dispatchCloseWithValue();
  }, [dispatchCloseWithValue]);
}