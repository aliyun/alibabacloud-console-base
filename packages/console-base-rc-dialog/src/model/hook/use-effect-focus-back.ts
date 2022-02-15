import {
  useEffect
} from 'react';

import useHandleFocusBack from './use-handle-focus-back';

export default function useEffectFocusBack(): void {
  const handleFocusBack = useHandleFocusBack();
  
  useEffect(() => {
    return () => handleFocusBack();
  }, [handleFocusBack]);
}