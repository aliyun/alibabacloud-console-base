import {
  EMicroBrowserMode
} from '../enum';

import useModelProps from './_use-model-props';
import useMode from './use-mode';

export default function useRndSizeWidthMin(): number {
  const {
    widthMin,
    widthMinPinned
  } = useModelProps();
  const mode = useMode();
  
  switch (mode) {
    case EMicroBrowserMode.MINIMIZED:
      return 0;
    case EMicroBrowserMode.TO_THE_RIGHT:
    case EMicroBrowserMode.TO_THE_RIGHT_PINNED:
      return widthMinPinned;
    default:
      return widthMin;
  }
}
