import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';

export default function useHandleClickBackdrop(): () => void {
  const {
    onClose
  } = useModelProps();
  
  return useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);
}
