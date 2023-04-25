import React, {
  ReactNode
} from 'react';
import {
  Rnd
} from 'react-rnd';
import styled, {
  css
} from 'styled-components';

import {
  EMicroBrowserMode,
  CLASS_J_RND_HANDLE,
  CLASS_J_RND_CANCEL,
  useMode,
  useMoving,
  useZIndex,
  useRndRectX,
  useRndRectY,
  useRndRectW,
  useRndRectH,
  useRndResizeHandleStyles,
  useRndDraggingDisabled,
  useRndSizeWidthRange,
  useRndSizeHeightRange,
  useHandleRndDragStop,
  useHandleRndResize,
  useHandleRndResizeStop,
  useHandleRndDragStart,
  useHandleRndResizeStart,
  useProps
} from '../../../model';

interface IProps {
  children: ReactNode;
}

interface IScProps {
  $moving: boolean;
  $visible: boolean;
}

const ScFixedWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`;

// TODO 奇怪的 TS 报错
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScRnd = styled(Rnd as any)<IScProps>`
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.21);
  background-color: #fff;
  ${props => (props.$moving ? null : css`
    transition: all 0.3s ease-in;
  `)}
  ${props => (props.$visible ? null : css`
    opacity: 0;
  `)}
  
  ${`.${CLASS_J_RND_HANDLE}`} {
    cursor: move;
  }
` as unknown as typeof Rnd;

/**
 * 在 rnd 上设置 fixed 必须用 style，但设置了之后有个问题，就是无法贴边，且拖拽后顶部会往上超一点，
 * 所以需要一个 ScFixedWrapper 来包一下
 */
export default function TheRnd({
  children
}: IProps): JSX.Element {
  const {
    visible
  } = useProps();
  const mode = useMode();
  const moving = useMoving();
  const zIndex = useZIndex();
  const resizeHandleStyles = useRndResizeHandleStyles();
  const x = useRndRectX();
  const y = useRndRectY();
  const w = useRndRectW();
  const h = useRndRectH();
  const [minWidth, maxWidth] = useRndSizeWidthRange();
  const [minHeight, maxHeight] = useRndSizeHeightRange();
  const draggingDisabled = useRndDraggingDisabled();
  const handleRndDragStart = useHandleRndDragStart();
  const handleRndDragStop = useHandleRndDragStop();
  const handleRndResizeStart = useHandleRndResizeStart();
  const handleRndResize = useHandleRndResize();
  const handleRndResizeStop = useHandleRndResizeStop();
  
  return <ScFixedWrapper {...{
    style: {
      visibility: visible ? 'visible' : 'hidden', // 不能用 display，有个 bug，transform 会变双倍..导致不可见 https://github.com/bokuweb/react-rnd/issues/711
      zIndex
    }
  }}>
    <ScRnd {...{
      $moving: moving,
      $visible: visible && mode !== EMicroBrowserMode.MINIMIZED,
      bounds: 'window',
      size: {
        width: w,
        height: h
      },
      position: {
        x,
        y
      },
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      resizeHandleStyles,
      dragHandleClassName: CLASS_J_RND_HANDLE,
      cancel: `.${CLASS_J_RND_CANCEL}`,
      disableDragging: draggingDisabled,
      onDragStart: handleRndDragStart,
      onDragStop: handleRndDragStop,
      onResizeStart: handleRndResizeStart,
      onResize: handleRndResize,
      onResizeStop: handleRndResizeStop
    }}>{children}</ScRnd>
  </ScFixedWrapper>;
}
