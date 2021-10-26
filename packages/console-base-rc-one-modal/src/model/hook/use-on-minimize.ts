import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../const';

import useMode from './use-mode';
import useHandleModeChange from './use-handle-mode-change';

export default function useOnMinimize(): () => void {
  const mode = useMode();
  const handleModeChange = useHandleModeChange();
  
  return useCallback(() => handleModeChange(mode === EModalMode.MINIMIZED ? EModalMode.FREE : EModalMode.MINIMIZED), [mode, handleModeChange]);
}
