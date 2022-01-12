import {
  useEffect
} from 'react';

import {
  useHandleHideWhenDisabled
} from '../../../model';

export default function HideWhenDisable(): null {
  const handleHideWhenDisabled = useHandleHideWhenDisabled();
  
  useEffect(() => {
    handleHideWhenDisabled();
  }, [handleHideWhenDisabled]);
  
  return null;
}
