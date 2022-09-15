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
    y2
  } = useModelState();
  const mode = useMode();
  
  switch (mode) {
    case EMicroBrowserMode.MINIMIZED:
      return [0, y2];
    case EMicroBrowserMode.TO_THE_RIGHT:
    case EMicroBrowserMode.TO_THE_RIGHT_PINNED:
      return [y2, y2];
    default:
      return numberRange(getLegalNumber(HEIGHT_MIN, heightMin) + HEIGHT_TOOL_BAR, getLegalNumber(y2, heightMax));
  }
}
