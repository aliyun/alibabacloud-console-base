import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';

/**
 * TODO 后续需要根据 options 中是否有 message 来决定是否需要关闭
 */
export default function useHandleClickSandwichUpper(): () => void {
  const {
    onClose
  } = useModelProps();
  
  return useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);
}
