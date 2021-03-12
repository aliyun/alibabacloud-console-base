import {
  useCallback
} from 'react';

import useProps from './use-props';
import useDispatchToggleVisible from './use-dispatch-toggle-visible';

export default function useOnDocKeydown(): (e: KeyboardEvent) => void {
  const {
    onEsc,
    onNavUp,
    onNavDown
  } = useProps();
  const dispatchToggleVisible = useDispatchToggleVisible();
  
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
