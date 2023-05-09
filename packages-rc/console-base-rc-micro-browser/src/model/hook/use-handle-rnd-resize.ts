import {
  useCallback
} from 'react';
import {
  RndResizeCallback
} from 'react-rnd';

import useModelProps from './_use-model-props';
import useDispatchSetResizing from './use-dispatch-set-resizing';
import useHandleRndResize0 from './use-handle-rnd-resize0';

export default function useHandleRndResize(): RndResizeCallback {
  const {
    onResize
  } = useModelProps();
  const dispatchSetResizing = useDispatchSetResizing();
  const handleRndResize0 = useHandleRndResize0();
  
  return useCallback((_e, _dir, node, _delta, position) => {
    dispatchSetResizing(1);
    handleRndResize0(node, position);
    onResize?.();
  }, [onResize, dispatchSetResizing, handleRndResize0]);
}
