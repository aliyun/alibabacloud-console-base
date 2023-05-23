import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';

export default function useHandleFocusBack(): () => void {
  const {
    prevFocus
  } = useModelProps();
  
  return useCallback((): void => {
    if (prevFocus) {
      try {
        (prevFocus as HTMLElement).focus();
      } catch (err) {
        // ignore
      }
    }
  }, [prevFocus]);
}
