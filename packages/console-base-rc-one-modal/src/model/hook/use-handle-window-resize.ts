import {
  useCallback
} from 'react';

import {
  getScrollbarWidthOfWindow
} from '@alicloud/mere-dom';

import useDispatchRefreshWindowSize from './use-dispatch-refresh-window-size';
import useDispatchSetWindowScrollbarWidth from './use-dispatch-set-window-scrollbar-width';

export default function useHandleWindowResize(): () => void {
  const dispatchRefreshWindowSize = useDispatchRefreshWindowSize();
  const dispatchSetWindowScrollbarWidth = useDispatchSetWindowScrollbarWidth();
  
  return useCallback(() => {
    dispatchRefreshWindowSize();
    dispatchSetWindowScrollbarWidth(getScrollbarWidthOfWindow());
  }, [dispatchRefreshWindowSize, dispatchSetWindowScrollbarWidth]);
}
