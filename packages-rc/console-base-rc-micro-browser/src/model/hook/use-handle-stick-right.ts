import {
  useCallback
} from 'react';

import {
  EMicroBrowserMode
} from '../enum';

import useStickRightActive from './use-stick-right-active';
import useHandleModeChange from './use-handle-mode-change';

export default function useHandleStickRight(): () => void {
  const active = useStickRightActive();
  const handleModeChange = useHandleModeChange();
  
  return useCallback(() => handleModeChange(active ? EMicroBrowserMode.FREE : EMicroBrowserMode.PINNED), [active, handleModeChange]);
}
