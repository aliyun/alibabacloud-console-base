import {
  useCallback
} from 'react';

import useDispatchRefreshWindowSize from './use-dispatch-refresh-window-size';

export default function useHandleWindowResize(): () => void {
  const dispatchRefreshWindowSize = useDispatchRefreshWindowSize();
  
  return useCallback(() => {
    dispatchRefreshWindowSize();
  }, [dispatchRefreshWindowSize]);
}
