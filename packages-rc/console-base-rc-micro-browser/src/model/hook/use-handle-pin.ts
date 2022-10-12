import {
  useCallback
} from 'react';

import {
  EMicroBrowserMode
} from '../enum';

import useMode from './use-mode';
import useHandleModeChange from './use-handle-mode-change';

export default function useHandlePin(): () => void {
  const mode = useMode();
  const handleModeChange = useHandleModeChange();
  const active = mode === EMicroBrowserMode.TO_THE_RIGHT_PINNED;
  
  return useCallback(() => handleModeChange(active ? EMicroBrowserMode.TO_THE_RIGHT : EMicroBrowserMode.TO_THE_RIGHT_PINNED), [active, handleModeChange]);
}
