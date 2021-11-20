import {
  useEffect
} from 'react';

import {
  useHandleRefreshRectStyle
} from '../../../model';

export default function CalcRect(): null {
  const handleRefreshRect = useHandleRefreshRectStyle();
  
  useEffect(handleRefreshRect, [handleRefreshRect]);
  
  return null;
}
