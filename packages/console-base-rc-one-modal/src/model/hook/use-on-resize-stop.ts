import {
  useCallback
} from 'react';
import {
  RndResizeCallback
} from 'react-rnd';

import useRndState from './use-rnd-state';
import useDispatchRndResize from './use-dispatch-rnd-resize';

export default function useOnResizeStop(): RndResizeCallback {
  const {
    mode
  } = useRndState();
  const dispatchRndResize = useDispatchRndResize();
  
  return useCallback((e, dir, ref, delta, newPosition) => dispatchRndResize({
    mode,
    w: ref.offsetWidth,
    h: ref.offsetHeight,
    x: newPosition.x,
    y: newPosition.y,
    stopped: true
  }), [mode, dispatchRndResize]);
}
