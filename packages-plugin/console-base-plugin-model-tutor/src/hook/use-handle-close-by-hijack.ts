import {
  useCallback
} from 'react';

import useOpenKey from './use-open-key';
import useHandleClose from './use-handle-close';

export default function useHandleCloseByHijack(): (key: string) => void {
  const openKey = useOpenKey();
  const handleClose = useHandleClose();
  
  return useCallback((key: string) => {
    if (openKey === key) {
      handleClose('hijack');
    }
  }, [openKey, handleClose]);
}
