import {
  useMemo
} from 'react';

import {
  EModalMode
} from '../../const';
import {
  IContextState
} from '../types';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useMode from './use-mode';

interface IRndState {
  mode: EModalMode;
  visible: boolean;
  moving: boolean;
  zIndex: number;
  minWidth: number;
  minHeight: number;
  w: number;
  h: number;
  x: number;
  y: number;
}

function getRectForModeMinimized({
  x2,
  y2
}: IContextState, affix?: string | Element | null): [number, number, number, number] {
  let width = 40;
  let height = 40;
  let posX = x2;
  let posY = y2;
  
  try {
    let affixEl: Element | null | undefined;
    
    if (typeof affix === 'string') {
      affixEl = document.querySelector(affix);
    } else {
      affixEl = affix;
    }
    
    const rect = affixEl?.getBoundingClientRect();
    
    if (rect) {
      width = rect.width;
      height = rect.height;
      posX = rect.x;
      posY = rect.y;
    }
  } catch (err) {
    // ignore
  }
  
  return [width, height, posX, posY];
}

function getRectForModePinned({
  x2,
  y2,
  pinnedWidth
}: IContextState, propPinnedWidth: number): [number, number, number, number] {
  const w = Math.min(pinnedWidth > 0 ? pinnedWidth : propPinnedWidth, x2);
  
  return [w, y2, x2 > w ? x2 - w : 0, 0];
}

function getRectForModeFree({
  x,
  y,
  x1,
  y1
}: IContextState): [number, number, number, number] {
  return [x1 - x, y1 - y, x > 0 ? x : 0, y > 0 ? y : 0];
}

/**
 * 当前状态、大小、位置等信息
 */
export default function useRndState(): IRndState {
  const props = useModelProps();
  const state = useModelState();
  const mode = useMode();
  const {
    affix,
    visible,
    pinnedWidth,
    minWidth,
    minHeight,
    zIndex
  } = props;
  const {
    dragging,
    resizing
  } = state;
  const moving = dragging || resizing >= 0;
  
  return useMemo<IRndState>((): IRndState => {
    const modeIsMin = mode === EModalMode.MINIMIZED;
    let w: number;
    let h: number;
    let x: number;
    let y: number;
    
    switch (mode) {
      case EModalMode.MINIMIZED:
        [w, h, x, y] = getRectForModeMinimized(state, affix);
        
        break;
      case EModalMode.TO_THE_RIGHT:
      case EModalMode.TO_THE_RIGHT_PINNED:
        [w, h, x, y] = getRectForModePinned(state, pinnedWidth);
        
        break;
      default:
        [w, h, x, y] = getRectForModeFree(state);
        
        break;
    }
    
    if (!visible) {
      x = state.x2 + 20;
    }
    
    return {
      mode,
      visible,
      moving,
      zIndex,
      minWidth: modeIsMin ? 0 : minWidth,
      minHeight: modeIsMin ? 0 : minHeight,
      w,
      h,
      x,
      y
    };
  }, [affix, minHeight, minWidth, mode, moving, pinnedWidth, state, visible, zIndex]);
}
