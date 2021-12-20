import {
  useEffect
} from 'react';

import {
  useHandleAdjustNavWidth
} from '../../../model';

export default function AdjustNavWidth(): null {
  const handleAdjustNavWidth = useHandleAdjustNavWidth();
  
  useEffect(handleAdjustNavWidth, [handleAdjustNavWidth]);
  
  return null;
}
