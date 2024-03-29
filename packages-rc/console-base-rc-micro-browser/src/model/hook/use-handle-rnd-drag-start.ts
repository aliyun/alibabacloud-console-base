import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetDragging from './use-dispatch-set-dragging';

export default function useHandleRndDragStart(): () => void {
  const {
    onDragStart
  } = useModelProps();
  const dispatchSetDragging = useDispatchSetDragging();
  
  return useCallback(() => {
    dispatchSetDragging(0);
    onDragStart?.();
  }, [dispatchSetDragging, onDragStart]);
}
