import {
  useCallback
} from 'react';

import useHandleClose from './use-handle-close';

/**
 * TODO 后续需要根据 options 中是否有 message 来决定是否需要关闭
 */
export default function useHandleCloseOnSandwichUpperClick(): () => void {
  const handleClose = useHandleClose();
  
  return useCallback(() => {
    handleClose('upper');
  }, [handleClose]);
}
