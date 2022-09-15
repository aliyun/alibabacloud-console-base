// import {
//   EModalMode
// } from '../enum';

import useModelProps from './_use-model-props';
// import useMode from './use-mode';

export default function useRndSizeHeightMax(): number {
  // const mode = useMode();
  const {
    heightMax
  } = useModelProps();
  
  return heightMax;
  //
  // switch (mode) {
  //   case EModalMode.MINIMIZED:
  //     return 0;
  //   case EModalMode.TO_THE_RIGHT:
  //   case EModalMode.TO_THE_RIGHT_PINNED:
  //     return computeRectForModePinned(state, pinnedWidth);
  //   default:
  //     return maxHeight;
  // }
}
