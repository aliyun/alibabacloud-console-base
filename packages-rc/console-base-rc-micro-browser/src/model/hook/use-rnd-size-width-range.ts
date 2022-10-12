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
    viewportW
  } = useModelState();
  const mode = useMode();
  
  switch (mode) {
    case EMicroBrowserMode.MINIMIZED:
      return [0, viewportW];
    case EMicroBrowserMode.TO_THE_RIGHT:
    case EMicroBrowserMode.TO_THE_RIGHT_PINNED:
      return numberRange(getLegalNumber(WIDTH_MIN_PINNED, widthMinPinned), getLegalNumber(viewportW, widthMaxPinned));
    default:
      return numberRange(getLegalNumber(WIDTH_MIN, widthMin), getLegalNumber(viewportW, widthMax));
  }
}
