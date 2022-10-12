import {
  useEffect
} from 'react';

import useHandleRefreshAttentionRect from './use-handle-refresh-attention-rect';

export default function useEffectRefreshAttentionRect(): void {
  const handleRefreshRect = useHandleRefreshAttentionRect();
  
  useEffect(handleRefreshRect, [handleRefreshRect]);
}
