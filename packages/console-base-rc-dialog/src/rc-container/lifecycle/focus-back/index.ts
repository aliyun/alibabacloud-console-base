import {
  useEffect
} from 'react';

import {
  useHandleFocusBack
} from '../../../model';

export default function FocusBack(): null {
  const handleFocusBack = useHandleFocusBack();
  
  useEffect(() => {
    return () => handleFocusBack();
  }, [handleFocusBack]);
  
  return null;
}