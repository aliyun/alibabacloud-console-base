import {
  useCallback
} from 'react';
import {
  RndResizeCallback
} from 'react-rnd';

import useRndStateExtra from './use-rnd-state-extra';
import useDispatchRndResize from './use-dispatch-rnd-resize';

export default function useOnResize(): RndResizeCallback {
  const {
    mode
  } = useRndStateExtra();
  const dispatchRndResize = useDispatchRndResize();
  
  return useCallback((e, dir, ref, delta, newPosition) => dispatchRndResize({
    mode,
    w: ref.offsetWidth,
    h: ref.offsetHeight,
    x: newPosition.x,
    y: newPosition.y
  }), [mode, dispatchRndResize]);
}
