import {
  useCallback
} from 'react';

import {
  EMicroBrowserMode
} from '../enum';

import useModelProps from './_use-model-props';
import useDispatchSetMode from './use-dispatch-set-mode';

export default function useHandleModeChange(): (mode: EMicroBrowserMode) => void {
  const {
    onModeChange
  } = useModelProps();
  const dispatchSetMode = useDispatchSetMode();
  
  return useCallback((mode: EMicroBrowserMode) => {
    dispatchSetMode(mode);
    onModeChange?.(mode);
  }, [onModeChange, dispatchSetMode]);
}
