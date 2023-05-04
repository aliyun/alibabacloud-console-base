import {
  useCallback
} from 'react';

import {
  EMicroBrowserMode
} from '../enum';

import useMode from './use-mode';
import useHandleModeChange from './use-handle-mode-change';

export default function useHandleDragBarDoubleClick(): () => void {
  const mode = useMode();
  const handleModeChange = useHandleModeChange();
  
  return useCallback(() => {
    switch (mode) {
      case EMicroBrowserMode.FREE:
        handleModeChange(EMicroBrowserMode.PINNED);
        
        break;
      case EMicroBrowserMode.PINNED:
        handleModeChange(EMicroBrowserMode.FREE);
        
        break;
      default:
        break;
    }
  }, [mode, handleModeChange]);
}
