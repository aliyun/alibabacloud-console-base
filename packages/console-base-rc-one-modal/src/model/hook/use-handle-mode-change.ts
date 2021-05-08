import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../../const';

import useProps from './use-props';
import useDispatchSetMode from './use-dispatch-set-mode';

export default function useHandleModeChange(): (mode: EModalMode) => void {
  const {
    onModeChange
  } = useProps();
  const dispatchSetMode = useDispatchSetMode();
  
  return useCallback((mode: EModalMode) => {
    dispatchSetMode(mode);
    
    if (onModeChange) {
      onModeChange(mode);
    }
  }, [onModeChange, dispatchSetMode]);
}
