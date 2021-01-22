import React, {
  ReactNode,
  useCallback
} from 'react';
import {
  Rnd,
  RndResizeCallback,
  RndDragCallback
} from 'react-rnd';
import styled, {
  css
} from 'styled-components';

import {
  EModalMode,
  CLASS_J_RND_HANDLE,
  CLASS_J_RND_CANCEL
} from '../../const';
import {
  useRndState,
  useRndResizeHandleStyles,
  useRndDraggingDisabled,
  useDispatchRndDragStart,
  useDispatchRndDragStop,
  useDispatchRndResizeStart,
  useDispatchRndResize
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
  const resizeHandleStyles = useRndResizeHandleStyles();
  const {
    mode,
    visible,
    moving,
    zIndex,
    minWidth,
    minHeight,
    w,
    h,
    x,
    y
  } = useRndState();
  const draggingDisabled = useRndDraggingDisabled();
  const dispatchRndDragStart = useDispatchRndDragStart();
  const dispatchRndDragStop = useDispatchRndDragStop();
  const dispatchRndResizeStart = useDispatchRndResizeStart();
  const dispatchRndResize = useDispatchRndResize();
  
  const handleDragStop: RndDragCallback = useCallback((e, dragData) => dispatchRndDragStop(dragData.x, dragData.y), [dispatchRndDragStop]);
  const handleResize: RndResizeCallback = useCallback((e, dir, ref, delta, newPosition) => dispatchRndResize({
    mode,
    w: ref.offsetWidth,
    h: ref.offsetHeight,
    x: newPosition.x,
    y: newPosition.y
  }), [mode, dispatchRndResize]);
  const handleResizeStop: RndResizeCallback = useCallback((e, dir, ref, delta, newPosition) => dispatchRndResize({
    mode,
    w: ref.offsetWidth,
    h: ref.offsetHeight,
    x: newPosition.x,
    y: newPosition.y,
    stopped: true
  }), [mode, dispatchRndResize]);
  
  return <ScFixedWrapper {...{
    style: {
      visibility: visible ? 'visible' : 'hidden', // 不能用 display，有个 bug，transform 会变双倍..导致不可见 https://github.com/bokuweb/react-rnd/issues/711
      zIndex: !visible || mode === EModalMode.MINIMIZED ? 0 : zIndex
    }
  }}>
    <ScRnd {...{
      'data-moving': moving ? 1 : 0,
      'data-invisible': !visible || mode === EModalMode.MINIMIZED ? 1 : 0,
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
      resizeHandleStyles,
      dragHandleClassName: CLASS_J_RND_HANDLE,
      cancel: `.${CLASS_J_RND_CANCEL}`,
      disableDragging: draggingDisabled,
      onDragStart: dispatchRndDragStart,
      onDragStop: handleDragStop,
      onResizeStart: dispatchRndResizeStart,
      onResize: handleResize,
      onResizeStop: handleResizeStop
    }}>{children}</ScRnd>
  </ScFixedWrapper>;
}
