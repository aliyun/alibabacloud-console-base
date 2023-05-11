import {
  useCallback
} from 'react';

import useHandleToggleVisible from './use-handle-toggle-visible';

export default function useHandleToggleVisibleTrue(): () => void {
  const handleToggleVisible = useHandleToggleVisible();
  
  return useCallback((): void => {
    handleToggleVisible(true);
  }, [handleToggleVisible]);
}
