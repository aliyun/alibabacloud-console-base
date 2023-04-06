import {
  useCallback
} from 'react';

import useHandleToggleHovered from './use-handle-toggle-hovered';

export default function useHandleToggleHoveredFalse(): () => void {
  const handleToggleHovered = useHandleToggleHovered();
  
  return useCallback(() => {
    handleToggleHovered(false);
  }, [handleToggleHovered]);
}
