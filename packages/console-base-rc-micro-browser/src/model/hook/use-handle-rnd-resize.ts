import {
  useCallback
} from 'react';
import {
  RndResizeCallback
} from 'react-rnd';

import useMode from './use-mode';
import useDispatchRndResize from './use-dispatch-rnd-resize';

export default function useHandleRndResize(stopped?: boolean): RndResizeCallback {
  const mode = useMode();
  const dispatchRndResize = useDispatchRndResize();
  
  return useCallback((e, dir, ref, delta, newPosition) => dispatchRndResize({
    mode,
    x: newPosition.x,
    y: newPosition.y,
    w: ref.offsetWidth,
    h: ref.offsetHeight,
    stopped
  }), [mode, stopped, dispatchRndResize]);
}
