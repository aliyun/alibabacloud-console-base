import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../const';

import useMode from './use-mode';
import useHandleModeChange from './use-handle-mode-change';

export default function useOnPin(): () => void {
  const mode = useMode();
  const handleModeChange = useHandleModeChange();
  const active = mode === EModalMode.TO_THE_RIGHT_PINNED;
  
  return useCallback(() => handleModeChange(active ? EModalMode.TO_THE_RIGHT : EModalMode.TO_THE_RIGHT_PINNED), [active, handleModeChange]);
}
