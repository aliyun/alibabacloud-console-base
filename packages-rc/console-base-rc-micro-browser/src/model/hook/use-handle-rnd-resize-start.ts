import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetResizing from './use-dispatch-set-resizing';

export default function useHandleRndResizeStart(): () => void {
  const {
    onResizeStart
  } = useModelProps();
  const dispatchSetResizing = useDispatchSetResizing();
  
  return useCallback(() => {
    dispatchSetResizing(0);
    onResizeStart?.();
  }, [onResizeStart, dispatchSetResizing]);
}
