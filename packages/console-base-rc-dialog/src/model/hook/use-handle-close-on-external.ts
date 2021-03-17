import {
  useCallback
} from 'react';

import useProps from './use-props';
import useHandleClose from './use-handle-close';

/**
 * 处理外部点击关闭
 */
export default function useHandleCloseOnExternal(): () => void {
  const {
    externalClose,
    closable
  } = useProps();
  const handleClose = useHandleClose();
  
  return useCallback(() => {
    if (externalClose === -1 || (closable && externalClose)) {
      handleClose();
    }
  }, [externalClose, closable, handleClose]);
}
