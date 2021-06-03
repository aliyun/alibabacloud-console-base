import {
  useEffect
} from 'react';

import useModelState from '../../hook/_use-model-state';

/**
 * 有个很诡异的问题，在 demo 下试不出来...但是被集成后发现会接连触发两次 mouseenter，导致
 * 产生连续两次有效的 setTimeout，前一个不会被清理，于是即使鼠标很快移出也还是会触发 active。
 * 
 * 另外，有这个 lifecycle 也可以保护组件被移除后的报错。
 */
export default function ClearDockActiveTimer(): null {
  const {
    dockHoverActiveTimer
  } = useModelState();
  
  useEffect(() => {
    return () => {
      if (dockHoverActiveTimer) {
        window.clearTimeout(dockHoverActiveTimer);
      }
    };
  }, [dockHoverActiveTimer]);
  
  return null;
}
