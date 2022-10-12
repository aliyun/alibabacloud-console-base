import {
  useCallback
} from 'react';

import useDispatchSetDropExiting from './use-dispatch-set-drop-exiting';

export default function useHandleDropExit(): () => void {
  const dispatchSetDropExiting = useDispatchSetDropExiting();
  
  return useCallback((): void => dispatchSetDropExiting(true), [dispatchSetDropExiting]);
}
