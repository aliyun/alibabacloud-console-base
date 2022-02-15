import {
  useEffect
} from 'react';

import useHandleFocus from './use-handle-focus';

export default function useEffectAutoFocus(): void {
  const handleFocus = useHandleFocus();
  
  useEffect(() => {
    handleFocus();
  }, [handleFocus]);
}
