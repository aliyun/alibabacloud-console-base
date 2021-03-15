import {
  useEffect
} from 'react';

import {
  useProps,
  useHandleRefreshRect
} from '../../hook';

/**
 * 让使用者可以简单通过调用 refresh 方法以修正因 DOM 变化而造成的错位
 */
export default function WatchTimestamp(): null {
  const {
    timestamp
  } = useProps();
  const handleRefreshRect = useHandleRefreshRect();
  
  useEffect(handleRefreshRect, [timestamp, handleRefreshRect]);
  
  return null;
}
