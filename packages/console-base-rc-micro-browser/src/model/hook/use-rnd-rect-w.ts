import {
  WIDTH_DEFAULT,
  WIDTH_DEFAULT_MINIMIZED,
  WIDTH_DEFAULT_PINNED
} from '../../const';
import {
  EMicroBrowserMode
} from '../enum';
import {
  getLegalNumber
} from '../util';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useMode from './use-mode';
import useAffixRect from './use-affix-rect';

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
  
  switch (mode) {
    case EMicroBrowserMode.MINIMIZED:
      return affixRect?.width ?? WIDTH_DEFAULT_MINIMIZED;
    case EMicroBrowserMode.TO_THE_RIGHT:
    case EMicroBrowserMode.TO_THE_RIGHT_PINNED:
      return getLegalNumber(WIDTH_DEFAULT_PINNED, widthPinned, widthDefaultPinned);
    default:
      return getLegalNumber(WIDTH_DEFAULT, width, widthDefault);
  }
}
