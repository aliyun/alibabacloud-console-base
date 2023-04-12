import {
  useCallback
} from 'react';

import useHandleToggleHovered from './use-handle-toggle-hovered';

export default function useHandleToggleHoveredTrue(): () => void {
  const handleToggleHovered = useHandleToggleHovered();
  
  return useCallback(() => {
    handleToggleHovered(true);
  }, [handleToggleHovered]);
}
