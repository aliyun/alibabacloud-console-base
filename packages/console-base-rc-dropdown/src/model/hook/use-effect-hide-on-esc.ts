import {
  useEffect
} from 'react';

import useDropVisible from './use-drop-visible';
import useHandleDocKeydown from './use-handle-doc-keydown';

export default function useEffectHideOnEsc(): void {
  const dropVisible = useDropVisible();
  const handleDocKeydown = useHandleDocKeydown();
  
  useEffect(() => {
    if (dropVisible) {
      document.addEventListener('keydown', handleDocKeydown, true);
      
      return () => document.removeEventListener('keydown', handleDocKeydown, true);
    }
  }, [dropVisible, handleDocKeydown]);
}
