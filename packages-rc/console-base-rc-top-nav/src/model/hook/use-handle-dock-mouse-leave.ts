import {
  MouseEvent,
  useCallback
} from 'react';

import useDispatchSetDockHoverActiveTimer from './use-dispatch-set-dock-hover-active-timer';

export default function useHandleDockMouseLeave(): (e: MouseEvent<HTMLElement>) => void {
  const dispatchSetDockHoverActiveTimer = useDispatchSetDockHoverActiveTimer();
  
  return useCallback((): void => {
    dispatchSetDockHoverActiveTimer(null); // lifecycle 会清理未完成的 timeout
  }, [dispatchSetDockHoverActiveTimer]);
}
