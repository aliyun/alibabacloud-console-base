import {
  HEIGHT_DEFAULT,
  HEIGNT_DEFAULT_MINIMIZED
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
 * 根据 mode 计算得出高度
 */
export default function useRndRectH(): number {
  const {
    heightDefault
  } = useModelProps();
  const {
    height,
    y2
  } = useModelState();
  const mode = useMode();
  const affixRect = useAffixRect();
  
  switch (mode) {
    case EMicroBrowserMode.MINIMIZED:
      return affixRect?.height ?? HEIGNT_DEFAULT_MINIMIZED;
    case EMicroBrowserMode.TO_THE_RIGHT:
    case EMicroBrowserMode.TO_THE_RIGHT_PINNED:
      return y2;
    default:
      return getLegalNumber(HEIGHT_DEFAULT, height, heightDefault);
  }
}
