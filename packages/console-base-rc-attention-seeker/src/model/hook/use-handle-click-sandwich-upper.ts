import {
  useCallback
} from 'react';

import useProps from './use-props';

/**
 * TODO 后续需要根据 options 中是否有 message 来决定是否需要关闭
 */
export default function useHandleClickSandwichUpper(): () => void {
  const {
    onClose
  } = useProps();
  
  return useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);
}
