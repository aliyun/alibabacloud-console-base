import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetHovered from './use-dispatch-set-hovered';

export default function useHandleToggleHovered(): (hovered: boolean) => void {
  const {
    onHoveredChange
  } = useModelProps();
  const dispatchSetHovered = useDispatchSetHovered();
  
  return useCallback((hovered: boolean) => {
    dispatchSetHovered(hovered);
    onHoveredChange?.(hovered);
  }, [dispatchSetHovered, onHoveredChange]);
}
