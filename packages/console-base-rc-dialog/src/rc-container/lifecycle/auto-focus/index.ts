import {
  useEffect
} from 'react';

import {
  useHandleFocus
} from '../../../model';

export default function AutoFocus(): null {
  const handleFocus = useHandleFocus();
  
  useEffect(() => {
    handleFocus();
  }, [handleFocus]);
  
  return null;
}
