import {
  useEffect
} from 'react';

import {
  useProps,
  useHandleRefreshRectStyle
} from '../../hook';

/**
 * 组件会使用 ResizeObserver 对 DOM 变化进行监听并修正错位，然有时它会失效（比如仅仅修改 padding 不会触发），
 * 让使用者可以简单通过调用 refresh 方法修正不可自动修正的问题
 */
export default function WatchTimestamp(): null {
  const {
    timestamp
  } = useProps();
  const handleRefreshRect = useHandleRefreshRectStyle();
  
  useEffect(handleRefreshRect, [timestamp, handleRefreshRect]);
  
  return null;
}
