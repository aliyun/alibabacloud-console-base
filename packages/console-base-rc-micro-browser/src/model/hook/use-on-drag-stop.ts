import {
  useCallback
} from 'react';
import {
  RndDragCallback
} from 'react-rnd';

import useDispatchRndDragStop from './use-dispatch-rnd-drag-stop';

export default function useOnDragStop(): RndDragCallback {
  const dispatchRndDragStop = useDispatchRndDragStop();
  
  return useCallback((e, dragData) => dispatchRndDragStop(dragData.x, dragData.y), [dispatchRndDragStop]);
}
