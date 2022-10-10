import {
  useCallback
} from 'react';

import useOpenKey from './use-open-key';
import useHandleClose from './use-handle-close';

export default function useHandleCloseByMessenger(): (payload: string) => void {
  const openKey = useOpenKey();
  const handleClose = useHandleClose();
  
  return useCallback((payload: string) => {
    if (openKey === payload) {
      handleClose('messenger');
    }
  }, [openKey, handleClose]);
}
