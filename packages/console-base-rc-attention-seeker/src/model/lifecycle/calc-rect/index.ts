import {
  useEffect
} from 'react';

import {
  useHandleRefreshRect
} from '../../hook';

export default function CalcRect(): null {
  const handleRefreshRect = useHandleRefreshRect();
  
  useEffect(handleRefreshRect, [handleRefreshRect]);
  
  return null;
}
