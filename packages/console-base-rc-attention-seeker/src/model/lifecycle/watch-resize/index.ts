import {
  useEffect
} from 'react';

import {
  useHandleRefreshRect
} from '../../hook';

export default function WatchResize(): null {
  const handleRefreshRect = useHandleRefreshRect();
  
  useEffect(() => {
    window.addEventListener('resize', handleRefreshRect);
    
    return () => window.removeEventListener('resize', handleRefreshRect);
  }, [handleRefreshRect]);
  
  return null;
}
