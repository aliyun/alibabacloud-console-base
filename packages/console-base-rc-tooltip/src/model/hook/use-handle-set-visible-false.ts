import {
  useCallback
} from 'react';

import useDispatchSetVisible from './use-dispatch-set-visible';

export default function useHandleSetVisibleFalse(): () => void {
  const dispatchSetVisible = useDispatchSetVisible();
  
  return useCallback(() => dispatchSetVisible(false), [dispatchSetVisible]);
}