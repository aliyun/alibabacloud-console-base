import {
  useEffect
} from 'react';

import useDropVisible from '../../hook/use-drop-visible';
import useHandleDocKeydown from '../../hook/use-handle-doc-keydown';

export default function OnDocKeydown(): null {
  const dropVisible = useDropVisible();
  const handleDocKeydown = useHandleDocKeydown();
  
  useEffect(() => {
    if (dropVisible) {
      document.addEventListener('keydown', handleDocKeydown, true);
      
      return () => document.removeEventListener('keydown', handleDocKeydown, true);
    }
  }, [dropVisible, handleDocKeydown]);
  
  return null;
}
