import {
  useMemo
} from 'react';

import {
  IRndStateExtra
} from '../types';
import {
  EModalMode
} from '../const';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useMode from './use-mode';

/**
 * 当前状态、大小、位置等信息
 */
export default function useRndStateExtra(): IRndStateExtra {
  const {
    visible,
    minWidth,
    minHeight,
    zIndex
  } = useModelProps();
  const state = useModelState();
  const mode = useMode();
  const {
    dragging,
    resizing
  } = state;
  const moving = dragging || resizing >= 0;
  
  return useMemo<IRndStateExtra >((): IRndStateExtra => {
    const modeIsMin = mode === EModalMode.MINIMIZED;
    
    return {
      mode,
      visible,
      moving,
      zIndex,
      minWidth: modeIsMin ? 0 : minWidth,
      minHeight: modeIsMin ? 0 : minHeight
    };
  }, [minHeight, minWidth, mode, moving, visible, zIndex]);
}
