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
  CLASS_J_RND_HANDLE,
  CLASS_J_RND_CANCEL
} from '../../const';
import {
  EMicroBrowserMode,
  useMode,
  useMoving,
  useRndRectX,
  useRndRectY,
  useRndRectW,
  useRndRectH,
  useRndResizeHandleStyles,
  useRndDraggingDisabled,
  useRndSizeWidthMin,
  useRndSizeHeightMin,
  useRndSizeWidthMax,
  useRndSizeHeightMax,
  useHandleRndDragStop,
  useHandleRndResize,
  useHandleRndResizeStop,
  useHandleRndDragStart,
  useHandleRndResizeStart,
  useProps
} from '../../model';

interface IProps {
  children: ReactNode;
}

const ScFixedWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`;

const ScRnd = styled(Rnd)`
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.21);
  background-color: #fff;
  ${props => (props['data-moving'] ? null : css`
    transition: all 0.3s ease-in;
  `)}
  ${props => (props['data-invisible'] ? css`
    opacity: 0;
  ` : null)}
  
  ${`.${CLASS_J_RND_HANDLE}`} {
    cursor: move;
  }
`;

/**
 * 在 rnd 上设置 fixed 必须用 style，但设置了之后有个问题，就是无法贴边，且拖拽后顶部会往上超一点，
 * 所以需要一个 ScFixedWrapper 来包一下
 */
export default function TheRnd({
  children
}: IProps): JSX.Element {
  const {
    visible,
    zIndex
  } = useProps();
  const mode = useMode();
  const moving = useMoving();
  const resizeHandleStyles = useRndResizeHandleStyles();
  const x = useRndRectX();
  const y = useRndRectY();
  const w = useRndRectW();
  const h = useRndRectH();
  const minWidth = useRndSizeWidthMin();
  const minHeight = useRndSizeHeightMin();
  const maxWidth = useRndSizeWidthMax();
  const maxHeight = useRndSizeHeightMax();
  const draggingDisabled = useRndDraggingDisabled();
  const handleRndDragStart = useHandleRndDragStart();
  const handleRndDragStop = useHandleRndDragStop();
  const handleRndResizeStart = useHandleRndResizeStart();
  const handleRndResize = useHandleRndResize();
  const handleRndResizeStop = useHandleRndResizeStop();
  
  return <ScFixedWrapper {...{
    style: {
      visibility: visible ? 'visible' : 'hidden', // 不能用 display，有个 bug，transform 会变双倍..导致不可见 https://github.com/bokuweb/react-rnd/issues/711
      zIndex: !visible || mode === EMicroBrowserMode.MINIMIZED ? 0 : zIndex
    }
  }}>
    <ScRnd {...{
      'data-moving': moving ? 1 : 0,
      'data-invisible': !visible || mode === EMicroBrowserMode.MINIMIZED ? 1 : 0,
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
