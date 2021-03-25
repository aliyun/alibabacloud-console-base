import {
  useCallback
} from 'react';

import useProps from './use-props';
import useDispatchSetVisible from './use-dispatch-set-visible';

export default function useHandleDocKeydown(): (e: KeyboardEvent) => void {
  const {
    onEsc,
    onNavUp,
    onNavDown
  } = useProps();
  const dispatchToggleVisible = useDispatchSetVisible();
  
  return useCallback((e: KeyboardEvent): void => {
    switch (e.key) {
      case 'Escape':
        dispatchToggleVisible(false);
        
        if (onEsc) {
          onEsc();
        }
        
        break;
      case 'ArrowDown':
        if (onNavDown) {
          e.preventDefault();
          
          onNavDown();
        }
        
        break;
      case 'ArrowUp':
        if (onNavUp) {
          e.preventDefault();
          
          onNavUp();
        }
        
        break;
      default:
        break;
    }
  }, [onEsc, onNavUp, onNavDown, dispatchToggleVisible]);
}
