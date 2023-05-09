import {
  useCallback
} from 'react';

import {
  EMicroBrowserMode
} from '../enum';

import useMode from './use-mode';
import useHandleModeChange from './use-handle-mode-change';

export default function useHandleTogglePinned(): () => void {
  const mode = useMode();
  const handleModeChange = useHandleModeChange();
  
  return useCallback(() => handleModeChange(mode === EMicroBrowserMode.PINNED ? EMicroBrowserMode.FREE : EMicroBrowserMode.PINNED), [mode, handleModeChange]);
}
