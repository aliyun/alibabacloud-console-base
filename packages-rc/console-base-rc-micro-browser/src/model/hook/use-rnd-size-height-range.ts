import {
  EMicroBrowserMode
} from '../enum';
import {
  HEIGHT_MIN,
  HEIGHT_TOOL_BAR
} from '../const';
import {
  getLegalNumber,
  numberRange
} from '../util';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useMode from './use-mode';

export default function useRndSizeHeightRange(): [number, number] {
  const {
    heightMax,
    heightMin
  } = useModelProps();
  const {
    viewportH
  } = useModelState();
  const mode = useMode();
  
  switch (mode) {
    case EMicroBrowserMode.MINIMIZED:
      return [0, viewportH];
    case EMicroBrowserMode.PINNED:
      return [viewportH, viewportH];
    default:
      return numberRange(getLegalNumber(HEIGHT_MIN, heightMin) + HEIGHT_TOOL_BAR, getLegalNumber(viewportH, heightMax));
  }
}
