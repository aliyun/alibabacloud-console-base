import {
  useCallback
} from 'react';

import useHandleToggleVisible from './use-handle-toggle-visible';

export default function useHandleToggleVisibleFalse(): () => void {
  const handleToggleVisible = useHandleToggleVisible();
  
  return useCallback((): void => {
    handleToggleVisible(false);
  }, [handleToggleVisible]);
}
