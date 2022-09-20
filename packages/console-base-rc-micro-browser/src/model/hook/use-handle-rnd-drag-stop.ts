import {
  useCallback
} from 'react';
import {
  DraggableData,
  RndDragCallback
} from 'react-rnd';

import useDispatchRndDragStop from './use-dispatch-rnd-drag-stop';

export default function useHandleRndDragStop(): RndDragCallback {
  const dispatchRndDragStop = useDispatchRndDragStop();
  
  return useCallback((e, data: DraggableData) => dispatchRndDragStop({
    x: data.x,
    y: data.y,
    w: data.node.offsetWidth,
    h: data.node.offsetHeight
  }), [dispatchRndDragStop]);
}
