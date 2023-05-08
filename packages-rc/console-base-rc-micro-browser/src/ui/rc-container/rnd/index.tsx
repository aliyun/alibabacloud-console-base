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
  mixinBgPrimary,
  mixinBorderSecondary,
  mixinBorderSecondaryLeft,
  mixinShadowXl
} from '@alicloud/console-base-theme';

import {
  EMicroBrowserMode,
  CLASS_J_RND_HANDLE,
  CLASS_J_RND_PREVENT_CLICK,
  CLASS_J_RND_CANCEL,
  useMode,
  useDragging,
  useResizing,
  useZIndex,
  useRndRectX,
  useRndRectY,
  useRndRectW,
  useRndRectH,
  useRndResizeHandleStyles,
  useRndDraggingDisabled,
  useRndSizeWidthRange,
  useRndSizeHeightRange,
  useHandleRndDragStart,
  useHandleRndDrag,
  useHandleRndDragStop,
  useHandleRndResizeStart,
  useHandleRndResize,
  useHandleRndResizeStop,
  useProps
} from '../../../model';

interface IProps {
  children: ReactNode;
}

interface IScProps {
  $mode: EMicroBrowserMode;
  $dragging: boolean;
  $resizing: boolean;
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
  overflow: hidden;
  ${mixinBgPrimary}
  ${mixinShadowXl}
  
  ${props => {
    switch (props.$mode) {
      case EMicroBrowserMode.FREE:
        return mixinBorderSecondary;
      case EMicroBrowserMode.PINNED:
        return mixinBorderSecondaryLeft;
      default:
        return null;
    }
  }}
  ${props => (props.$dragging >= 0 || props.$resizing >= 0 ? null : css`
    transition: all 250ms ease-in;
  `)}
  ${props => (props.$visible ? null : css`
    opacity: 0;
  `)}
  
  ${`.${CLASS_J_RND_HANDLE}`} {
    cursor: move;
  }
  
  ${`.${CLASS_J_RND_PREVENT_CLICK}`} {
    ${props => (props.$dragging > 0 ? css`
      pointer-events: none;
    ` : null)}
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
  const dragging = useDragging();
  const resizing = useResizing();
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
  const handleRndDrag = useHandleRndDrag();
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
      $mode: mode,
      $dragging: dragging,
      $resizing: resizing,
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
      onDrag: handleRndDrag,
      onDragStop: handleRndDragStop,
      onResizeStart: handleRndResizeStart,
      onResize: handleRndResize,
      onResizeStop: handleRndResizeStop
    }}>{children}</ScRnd>
  </ScFixedWrapper>;
}
