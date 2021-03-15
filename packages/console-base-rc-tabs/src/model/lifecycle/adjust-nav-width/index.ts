import {
  useEffect
} from 'react';

import {
  useHandleAdjustNavWidth
} from '../../hook';

export default function AdjustNavWidth(): null {
  const handleAdjustNavWidth = useHandleAdjustNavWidth();
  
  useEffect(handleAdjustNavWidth, [handleAdjustNavWidth]);
  
  return null;
}
