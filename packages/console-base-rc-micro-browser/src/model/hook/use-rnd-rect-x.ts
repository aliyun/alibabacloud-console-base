import {
  EMicroBrowserMode
} from '../enum';

import useModelState from './_use-model-state';
import useMode from './use-mode';
import useAffixRect from './use-affix-rect';
import useRndRectW from './use-rnd-rect-w';

/**
 * 根据 mode 计算得出左上角 x 坐标
 */
export default function useRndRectX(): number {
  const {
    x1,
    x2,
    windowScrollbarWidth
  } = useModelState();
  const mode = useMode();
  const w = useRndRectW();
  const affixRect = useAffixRect();
  
  switch (mode) {
    case EMicroBrowserMode.MINIMIZED:
      return affixRect?.left ?? x2;
    case EMicroBrowserMode.TO_THE_RIGHT:
    case EMicroBrowserMode.TO_THE_RIGHT_PINNED:
      return (x2 > w ? x2 - w : 0) - windowScrollbarWidth;
    default:
      return Math.max(x1 - w, 0);
  }
}
