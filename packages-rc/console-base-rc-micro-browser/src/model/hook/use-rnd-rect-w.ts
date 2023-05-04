import {
  EMicroBrowserMode
} from '../enum';
import {
  WIDTH_DEFAULT,
  WIDTH_DEFAULT_MINIMIZED,
  WIDTH_DEFAULT_PINNED
} from '../const';
import {
  getLegalNumber,
  makeNumberInRange
} from '../util';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useMode from './use-mode';
import useAffixRect from './use-affix-rect';
import useRndSizeWidthRange from './use-rnd-size-width-range';

/**
 * 根据 mode 计算得出宽度
 */
export default function useRndRectW(): number {
  const {
    widthDefault,
    widthDefaultPinned
  } = useModelProps();
  const {
    width,
    widthPinned
  } = useModelState();
  const mode = useMode();
  const affixRect = useAffixRect();
  const widthRange = useRndSizeWidthRange();
  
  switch (mode) {
    case EMicroBrowserMode.MINIMIZED:
      return makeNumberInRange(affixRect?.width ?? WIDTH_DEFAULT_MINIMIZED, widthRange);
    case EMicroBrowserMode.PINNED:
      return makeNumberInRange(getLegalNumber(WIDTH_DEFAULT_PINNED, widthPinned, widthDefaultPinned), widthRange);
    default:
      return makeNumberInRange(getLegalNumber(WIDTH_DEFAULT, width, widthDefault), widthRange);
  }
}
