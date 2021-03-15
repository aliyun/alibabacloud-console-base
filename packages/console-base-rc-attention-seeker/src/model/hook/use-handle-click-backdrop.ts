import {
  useCallback
} from 'react';

import useProps from './use-props';

export default function useHandleClickBackdrop(): () => void {
  const {
    onClose
  } = useProps();
  
  return useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);
}
