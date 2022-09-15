import {
  useCallback
} from 'react';
import {
  RndDragCallback
} from 'react-rnd';

import useDispatchRndDragStop from './use-dispatch-rnd-drag-stop';

export default function useHandleRndDragStop(): RndDragCallback {
  const dispatchRndDragStop = useDispatchRndDragStop();
  
  return useCallback((e, dragData) => dispatchRndDragStop({
    x: dragData.x,
    y: dragData.y,
    w: dragData.node.offsetWidth,
    h: dragData.node.offsetHeight
  }), [dispatchRndDragStop]);
}
