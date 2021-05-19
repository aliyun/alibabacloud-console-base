import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../../const';

import useMode from './use-mode';
import useHandleModeChange from './use-handle-mode-change';

export default function useHandleDragBarDoubleClick(): () => void {
  const mode = useMode();
  const handleModeChange = useHandleModeChange();
  
  return useCallback(() => {
    switch (mode) {
      case EModalMode.FREE:
        handleModeChange(EModalMode.TO_THE_RIGHT);
        
        break;
      case EModalMode.TO_THE_RIGHT:
      case EModalMode.TO_THE_RIGHT_PINNED:
        handleModeChange(EModalMode.FREE);
        
        break;
      default:
        break;
    }
  }, [mode, handleModeChange]);
}
