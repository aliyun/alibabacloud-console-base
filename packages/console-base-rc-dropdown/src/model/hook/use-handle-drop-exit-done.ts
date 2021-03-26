import {
  useCallback
} from 'react';

import useDispatchSetDropExiting from './use-dispatch-set-drop-exiting';

export default function useHandleDropExitDone(): () => void {
  const dispatchSetDropExiting = useDispatchSetDropExiting();
  
  return useCallback((): void => dispatchSetDropExiting(false), [dispatchSetDropExiting]);
}
