import {
  useCallback
} from 'react';
import {
  DraggableData,
  RndDragCallback
} from 'react-rnd';

import useModelProps from './_use-model-props';
import useDispatchSetDragging from './use-dispatch-set-dragging';
import useDispatchSetPositionRight from './use-dispatch-set-position-right';
import useDispatchSetPositionBottom from './use-dispatch-set-position-bottom';
import useModelState from './_use-model-state';

export default function useHandleRndDragStop(): RndDragCallback {
  const {
    onDragEnd
  } = useModelProps();
  const {
    viewportW,
    viewportH
  } = useModelState();
  const dispatchSetDragging = useDispatchSetDragging();
  const dispatchSetPositionRight = useDispatchSetPositionRight();
  const dispatchSetPositionBottom = useDispatchSetPositionBottom();
  
  return useCallback((_e, data: DraggableData) => {
    const {
      x,
      y,
      node: {
        offsetWidth,
        offsetHeight
      }
    } = data;
    
    dispatchSetDragging(-1);
    dispatchSetPositionRight(Math.max(viewportW - (x + offsetWidth), 0));
    dispatchSetPositionBottom(viewportH - (y + offsetHeight));
    onDragEnd?.();
  }, [viewportW, viewportH, dispatchSetDragging, dispatchSetPositionRight, dispatchSetPositionBottom, onDragEnd]);
}
