import {
  useEffect
} from 'react';

import useVisible from '../../hook/use-visible';
import useHandleDocKeydown from '../../hook/use-handle-doc-keydown';

export default function OnDocKeydown(): null {
  const visible = useVisible();
  const handleDocKeydown = useHandleDocKeydown();
  
  useEffect(() => {
    if (visible) {
      document.addEventListener('keydown', handleDocKeydown, true);
      
      return () => document.removeEventListener('keydown', handleDocKeydown, true);
    }
  }, [visible, handleDocKeydown]);
  
  return null;
}
