import {
  useCallback
} from 'react';

import {
  EModalMode
} from '../enum';

import useModelProps from './_use-model-props';
import useDispatchSetMode from './use-dispatch-set-mode';

export default function useHandleModeChange(): (mode: EModalMode) => void {
  const {
    onModeChange
  } = useModelProps();
  const dispatchSetMode = useDispatchSetMode();
  
  return useCallback((mode: EModalMode) => {
    dispatchSetMode(mode);
    
    if (onModeChange) {
      onModeChange(mode);
    }
  }, [onModeChange, dispatchSetMode]);
}
