import {
  MouseEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetHovered from './use-dispatch-set-hovered';

export default function useHandleMouseEnter(): (e: MouseEvent) => void {
  const {
    onMouseEnter,
    onHoveredChange
  } = useModelProps();
  const dispatchSetHovered = useDispatchSetHovered();
  
  return useCallback((e: MouseEvent) => {
    dispatchSetHovered(true);
    onMouseEnter?.(e);
    onHoveredChange?.(true);
  }, [onHoveredChange, onMouseEnter, dispatchSetHovered]);
}