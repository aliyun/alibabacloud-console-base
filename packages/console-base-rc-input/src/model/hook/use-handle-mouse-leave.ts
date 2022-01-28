import {
  MouseEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetHovered from './use-dispatch-set-hovered';

export default function useHandleMouseLeave(): (e: MouseEvent) => void {
  const {
    onMouseLeave
  } = useModelProps();
  const dispatchSetHovered = useDispatchSetHovered();
  
  return useCallback((e: MouseEvent) => {
    dispatchSetHovered(false);
  
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  }, [onMouseLeave, dispatchSetHovered]);
}