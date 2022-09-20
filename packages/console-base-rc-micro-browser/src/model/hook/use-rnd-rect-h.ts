import {
  EMicroBrowserMode
} from '../enum';
import {
  HEIGHT_DEFAULT,
  HEIGHT_DEFAULT_MINIMIZED
} from '../const';
import {
  getLegalNumber,
  makeNumberInRange
} from '../util';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useMode from './use-mode';
import useAffixRect from './use-affix-rect';
import useRndSizeHeightRange from './use-rnd-size-height-range';

/**
 * 根据 mode 计算得出高度
 */
export default function useRndRectH(): number {
  const {
    heightDefault
  } = useModelProps();
  const {
    height,
    viewportH
  } = useModelState();
  const mode = useMode();
  const affixRect = useAffixRect();
  const heightRange = useRndSizeHeightRange();
  
  switch (mode) {
    case EMicroBrowserMode.MINIMIZED:
      return makeNumberInRange(affixRect?.height ?? HEIGHT_DEFAULT_MINIMIZED, heightRange);
    case EMicroBrowserMode.TO_THE_RIGHT:
    case EMicroBrowserMode.TO_THE_RIGHT_PINNED:
      return viewportH;
    default:
      return makeNumberInRange(getLegalNumber(HEIGHT_DEFAULT, height, heightDefault), heightRange);
  }
}
