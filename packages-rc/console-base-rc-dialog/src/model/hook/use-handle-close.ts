import {
  useCallback
} from 'react';

import useHandleCloseWithValue from './use-handle-close-with-value';

/**
 * 无参的关闭，用于内部调用
 */
export default function useHandleClose(): () => void {
  const handleCloseWithValue = useHandleCloseWithValue();
  
  return useCallback((): void => handleCloseWithValue(), [handleCloseWithValue]);
}
