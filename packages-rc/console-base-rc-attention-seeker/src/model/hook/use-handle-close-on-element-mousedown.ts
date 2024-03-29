import {
  useCallback
} from 'react';

import useHandleClose from './use-handle-close';

export default function useHandleCloseOnElementMousedown(): () => void {
  const handleClose = useHandleClose();
  
  return useCallback(() => {
    handleClose('element');
  }, [handleClose]);
}
