import {
  useCallback
} from 'react';
import {
  Position
} from 'react-rnd';

import {
  EMicroBrowserMode
} from '../enum';

import useMode from './use-mode';
import useModelState from './_use-model-state';
import useDispatchSetPositionRight from './use-dispatch-set-position-right';
import useDispatchSetPositionBottom from './use-dispatch-set-position-bottom';
import useDispatchSetSizeWidth from './use-dispatch-set-size-width';
import useDispatchSetSizeWidthPinned from './use-dispatch-set-size-width-pinned';
import useDispatchSetSizeHeight from './use-dispatch-set-size-height';

export default function useHandleRndResize0(): (node: HTMLElement, position: Position) => void {
  const mode = useMode();
  const {
    viewportW,
    viewportH
  } = useModelState();
  const dispatchSetPositionRight = useDispatchSetPositionRight();
  const dispatchSetPositionBottom = useDispatchSetPositionBottom();
  const dispatchSetSizeWidth = useDispatchSetSizeWidth();
  const dispatchSetSizeWidthPinned = useDispatchSetSizeWidthPinned();
  const dispatchSetSizeHeight = useDispatchSetSizeHeight();
  
  return useCallback((node: HTMLElement, position: Position): void => {
    switch (mode) {
      case EMicroBrowserMode.FREE:
        dispatchSetSizeWidth(node.offsetWidth);
        dispatchSetSizeHeight(node.offsetHeight);
        dispatchSetPositionRight(Math.max(viewportW - (position.x + node.offsetWidth), 0));
        dispatchSetPositionBottom(viewportH - (position.y + node.offsetHeight));
        
        break;
      case EMicroBrowserMode.PINNED:
        dispatchSetSizeWidthPinned(node.offsetWidth);
        
        break;
      default:
        break;
    }
  }, [
    mode,
    viewportW, viewportH,
    dispatchSetPositionRight, dispatchSetPositionBottom, dispatchSetSizeWidth, dispatchSetSizeWidthPinned, dispatchSetSizeHeight
  ]);
}
