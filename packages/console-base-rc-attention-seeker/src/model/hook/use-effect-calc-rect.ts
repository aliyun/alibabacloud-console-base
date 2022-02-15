import {
  useEffect
} from 'react';

import useHandleRefreshRectStyle from './use-handle-refresh-rect-style';

export default function useEffectCalcRect(): void {
  const handleRefreshRect = useHandleRefreshRectStyle();
  
  useEffect(handleRefreshRect, [handleRefreshRect]);
}
