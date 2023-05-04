import {
  EMicroBrowserMode
} from '../enum';

import useModelState from './_use-model-state';
import useMode from './use-mode';
import useAffixRect from './use-affix-rect';
import useRndRectH from './use-rnd-rect-h';

/**
 * 根据 mode 计算得出左上角 y 坐标
 */
export default function useRndRectY(): number {
  const {
    bottom,
    viewportH
  } = useModelState();
  const mode = useMode();
  const affixRect = useAffixRect();
  const h = useRndRectH();
  
  switch (mode) {
    case EMicroBrowserMode.MINIMIZED:
      return affixRect?.top ?? viewportH;
    case EMicroBrowserMode.PINNED:
      return 0;
    default:
      return Math.max(viewportH - bottom - h, 0);
  }
}
