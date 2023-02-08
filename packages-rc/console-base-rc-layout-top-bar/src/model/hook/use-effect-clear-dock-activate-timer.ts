import {
  useEffect
} from 'react';

import useHandleClearDockActiveTimer from './use-handle-clear-dock-active-timer';

export default function useEffectClearDockActivateTimer(): void {
  const handleClearDockActiveTimer = useHandleClearDockActiveTimer();
  
  useEffect(() => {
    return () => handleClearDockActiveTimer();
  }, [handleClearDockActiveTimer]);
}
