import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../../const';

import useHandleModeChange from './use-handle-mode-change';
import useStickRightActive from './use-stick-right-active';

export default function useOnStickRight(): () => void {
  const handleModeChange = useHandleModeChange();
  const active = useStickRightActive();
  
  return useCallback(() => handleModeChange(active ? EModalMode.FREE : EModalMode.TO_THE_RIGHT), [active, handleModeChange]);
}
