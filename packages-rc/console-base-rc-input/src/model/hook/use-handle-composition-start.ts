import {
  useCallback
} from 'react';

import useDispatchSetComposing from './use-dispatch-set-composing';

export default function useHandleCompositionStart(): () => void {
  const dispatchSetComposing = useDispatchSetComposing();
  
  return useCallback(() => {
    dispatchSetComposing(true);
  }, [dispatchSetComposing]);
}
