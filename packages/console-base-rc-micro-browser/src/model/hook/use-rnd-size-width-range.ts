import {
  EMicroBrowserMode
} from '../enum';
import {
  WIDTH_MIN,
  WIDTH_MIN_PINNED
} from '../const';
import {
  getLegalNumber,
  numberRange
} from '../util';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useMode from './use-mode';

export default function useRndSizeWidthRange(): [number, number] {
  const {
    widthMin,
    widthMinPinned,
    widthMax,
    widthMaxPinned
  } = useModelProps();
  const {
    x2
  } = useModelState();
  const mode = useMode();
  
  switch (mode) {
    case EMicroBrowserMode.MINIMIZED:
      return [0, x2];
    case EMicroBrowserMode.TO_THE_RIGHT:
    case EMicroBrowserMode.TO_THE_RIGHT_PINNED:
      return numberRange(getLegalNumber(WIDTH_MIN_PINNED, widthMinPinned), getLegalNumber(x2, widthMaxPinned));
    default:
      return numberRange(getLegalNumber(WIDTH_MIN, widthMin), getLegalNumber(x2, widthMax));
  }
}
