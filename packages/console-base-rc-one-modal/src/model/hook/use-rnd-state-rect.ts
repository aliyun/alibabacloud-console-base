import {
  useMemo
} from 'react';

import {
  EModalMode
} from '../const';
import {
  IRndStateRect
} from '../types';
import {
  getRectForModeFree,
  getRectForModePinned,
  getRectForModeMinimized
} from '../util';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useMode from './use-mode';

export default function useRndStateRect(): IRndStateRect {
  const props = useModelProps();
  const state = useModelState();
  const mode = useMode();
  const {
    affix,
    pinnedWidth
  } = props;
  
  return useMemo<IRndStateRect>((): IRndStateRect => {
    switch (mode) {
      case EModalMode.MINIMIZED:
        return getRectForModeMinimized(state, affix);
      case EModalMode.TO_THE_RIGHT:
      case EModalMode.TO_THE_RIGHT_PINNED:
        return getRectForModePinned(state, pinnedWidth);
      default:
        return getRectForModeFree(state);
    }
  }, [affix, mode, pinnedWidth, state]);
}
