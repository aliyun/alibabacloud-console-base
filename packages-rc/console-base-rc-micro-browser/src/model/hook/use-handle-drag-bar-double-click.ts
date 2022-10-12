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
        handleModeChange(EMicroBrowserMode.TO_THE_RIGHT);
        
        break;
      case EMicroBrowserMode.TO_THE_RIGHT:
      case EMicroBrowserMode.TO_THE_RIGHT_PINNED:
        handleModeChange(EMicroBrowserMode.FREE);
        
        break;
      default:
        break;
    }
  }, [mode, handleModeChange]);
}
