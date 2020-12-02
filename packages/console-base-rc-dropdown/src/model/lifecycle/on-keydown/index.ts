import {
  useEffect,
  useCallback
} from 'react';

import {
  useProps,
  useVisible,
  useDispatchToggleVisible
} from '../../hook';

export default function OnKeydown(): null {
  const {
    onEsc,
    onNavUp,
    onNavDown
  } = useProps();
  const visibleFinal = useVisible();
  const dispatchToggleVisible = useDispatchToggleVisible();
  
  const handleDocKeyDown = useCallback((e: KeyboardEvent): void => {
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
  }, [dispatchToggleVisible, onEsc, onNavUp, onNavDown]);
  
  useEffect(() => {
    if (visibleFinal) {
      document.addEventListener('keydown', handleDocKeyDown);
    }
    
    return () => document.removeEventListener('keydown', handleDocKeyDown);
  }, [visibleFinal, handleDocKeyDown]);
  
  return null;
}
