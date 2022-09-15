import {
  RndResizeCallback
} from 'react-rnd';

import useHandleRndResize from './use-handle-rnd-resize';

export default function useHandleRndResizeStop(): RndResizeCallback {
  return useHandleRndResize(true);
}
