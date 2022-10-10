import {
  useCallback
} from 'react';

import useHandleClose from './use-handle-close';

export default function useHandleCloseByDone(): () => void {
  const handleClose = useHandleClose();
  
  return useCallback(() => handleClose('done'), [handleClose]);
}
