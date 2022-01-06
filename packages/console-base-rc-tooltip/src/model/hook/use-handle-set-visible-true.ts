import {
  useCallback
} from 'react';

import useDispatchSetVisible from './use-dispatch-set-visible';

export default function useHandleSetVisibleTrue(): () => void {
  const dispatchSetVisible = useDispatchSetVisible();
  
  return useCallback(() => dispatchSetVisible(true), [dispatchSetVisible]);
}