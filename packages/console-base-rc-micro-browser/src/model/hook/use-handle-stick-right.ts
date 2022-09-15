import {
  useCallback
} from 'react';

import {
  EMicroBrowserMode
} from '../enum';

import useHandleModeChange from './use-handle-mode-change';
import useStickRightActive from './use-stick-right-active';

export default function useHandleStickRight(): () => void {
  const handleModeChange = useHandleModeChange();
  const active = useStickRightActive();
  
  return useCallback(() => handleModeChange(active ? EMicroBrowserMode.FREE : EMicroBrowserMode.TO_THE_RIGHT), [active, handleModeChange]);
}
