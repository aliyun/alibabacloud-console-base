import {
  useCallback
} from 'react';

import useModelState from './_use-model-state';
import useHandleSetVisible from './use-handle-set-visible';

export default function useHandleDropdownMouseEnter(): () => void {
  const {
    dropExiting
  } = useModelState();
  const handleSetVisible = useHandleSetVisible();
  
  return useCallback((): void => {
    if (!dropExiting) {
      handleSetVisible(true);
    }
  }, [dropExiting, handleSetVisible]);
}
