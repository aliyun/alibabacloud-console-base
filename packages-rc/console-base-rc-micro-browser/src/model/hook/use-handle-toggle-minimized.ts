import {
  useCallback
} from 'react';

import {
  EMicroBrowserMode
} from '../enum';

import useMode from './use-mode';
import useHandleModeChange from './use-handle-mode-change';

export default function useHandleToggleMinimized(): () => void {
  const mode = useMode();
  const handleModeChange = useHandleModeChange();
  
  return useCallback(() => handleModeChange(mode === EMicroBrowserMode.MINIMIZED ? EMicroBrowserMode.FREE : EMicroBrowserMode.MINIMIZED), [mode, handleModeChange]);
}
