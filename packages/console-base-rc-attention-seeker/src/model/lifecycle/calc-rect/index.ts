import {
  useEffect
} from 'react';

import {
  useHandleRefreshRectStyle
} from '../../hook';

export default function CalcRect(): null {
  const handleRefreshRect = useHandleRefreshRectStyle();
  
  useEffect(handleRefreshRect, [handleRefreshRect]);
  
  return null;
}
