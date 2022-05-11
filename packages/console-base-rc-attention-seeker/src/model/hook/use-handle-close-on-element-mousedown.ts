import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';

export default function useHandleCloseOnElementMousedown(): () => void {
  const {
    onClose
  } = useModelProps();
  
  return useCallback(() => {
    onClose?.('element');
  }, [onClose]);
}
