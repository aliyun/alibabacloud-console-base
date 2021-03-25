import {
  useCallback
} from 'react';

import useHandleSetVisible from './use-handle-set-visible';

export default function useHandleDropdownMouseEnter(): () => void {
  const handleSetVisible = useHandleSetVisible();
  
  return useCallback((): void => {
    console.info('enter');
    
    handleSetVisible(true)
  }, [handleSetVisible]);
}
