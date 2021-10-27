import {
  useCallback
} from 'react';

import useHandleClose from './use-handle-close';

export default function useHandleCloseOnBackdropClick(): () => void {
  const handleClose = useHandleClose();
  
  return useCallback(() => {
    handleClose('backdrop');
  }, [handleClose]);
}
