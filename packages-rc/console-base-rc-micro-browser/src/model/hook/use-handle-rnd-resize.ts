import {
  useCallback
} from 'react';
import {
  RndResizeCallback
} from 'react-rnd';

import useModelProps from './_use-model-props';
import useHandleRndResize0 from './use-handle-rnd-resize0';
import useDispatchSetResizing from './use-dispatch-set-resizing';

export default function useHandleRndResize(): RndResizeCallback {
  const {
    onResize
  } = useModelProps();
  const handleRndResize0 = useHandleRndResize0();
  const dispatchSetResizing = useDispatchSetResizing();
  
  return useCallback((_e, _dir, node, _delta, position) => {
    dispatchSetResizing(1);
    handleRndResize0(node, position);
    onResize?.();
  }, [onResize, dispatchSetResizing, handleRndResize0]);
}
