import {
  useCallback
} from 'react';

import useHandleTogglePinned from './use-handle-toggle-pinned';

export default function useHandleTabBarDoubleClick(): () => void {
  const handleTogglePinned = useHandleTogglePinned();
  
  return useCallback(() => {
    handleTogglePinned();
  }, [handleTogglePinned]);
}
