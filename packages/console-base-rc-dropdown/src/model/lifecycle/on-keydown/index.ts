import {
  useEffect
} from 'react';

import {
  useVisible,
  useOnDocKeydown
} from '../../hook';

export default function OnKeydown(): null {
  const visible = useVisible();
  const onDocKeydown = useOnDocKeydown();
  
  useEffect(() => {
    if (visible) {
      document.addEventListener('keydown', onDocKeydown, true);
      
      return () => document.removeEventListener('keydown', onDocKeydown, true);
    }
  }, [visible, onDocKeydown]);
  
  return null;
}
