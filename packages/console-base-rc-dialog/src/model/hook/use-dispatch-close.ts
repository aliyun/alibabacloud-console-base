import {
  useCallback
} from 'react';

import useDispatchCloseWithValue from './use-dispatch-close-with-value';

/**
 * 无参的关闭，用于内部调用
 */
export default function useDispatchClose(): () => void {
  const dispatchCloseWithValue = useDispatchCloseWithValue();
  
  return useCallback((): void => dispatchCloseWithValue(), [dispatchCloseWithValue]);
}
