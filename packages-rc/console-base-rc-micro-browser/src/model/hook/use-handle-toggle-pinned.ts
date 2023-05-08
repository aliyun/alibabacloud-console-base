import {
  useCallback
} from 'react';

import {
  EMicroBrowserMode
} from '../enum';

import usePinned from './use-pinned';
import useHandleModeChange from './use-handle-mode-change';

export default function useHandleTogglePinned(): () => void {
  const active = usePinned();
  const handleModeChange = useHandleModeChange();
  
  return useCallback(() => handleModeChange(active ? EMicroBrowserMode.FREE : EMicroBrowserMode.PINNED), [active, handleModeChange]);
}
