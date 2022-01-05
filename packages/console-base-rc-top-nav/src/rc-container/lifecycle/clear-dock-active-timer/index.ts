import {
  useEffect
} from 'react';

import {
  useHandleClearDockActiveTimer
} from '../../../model';

export default function ClearDockActiveTimer(): null {
  const handleClearDockActiveTimer = useHandleClearDockActiveTimer();
  
  useEffect(() => {
    return () => handleClearDockActiveTimer();
  }, [handleClearDockActiveTimer]);
  
  return null;
}
