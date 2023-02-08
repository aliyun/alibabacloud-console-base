import {
  useCallback
} from 'react';

import useModelState from './_use-model-state';

/**
 * 有个很诡异的问题，在 demo 下试不出来...但是被集成后发现会接连触发两次 mouseenter，导致
 * 产生连续两次有效的 setTimeout，前一个不会被清理，于是即使鼠标很快移出也还是会触发 active。
 * 
 * 所以需要用 effect 来清理它（也可以保护组件被移除后的报错）。
 */
export default function useHandleClearDockActiveTimer(): () => void {
  const {
    dockHoverActiveTimer
  } = useModelState();
  
  return useCallback(() => {
    if (dockHoverActiveTimer) {
      window.clearTimeout(dockHoverActiveTimer);
    }
  }, [dockHoverActiveTimer]);
}
